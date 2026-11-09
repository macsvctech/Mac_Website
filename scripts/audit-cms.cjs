const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const ROOT_DIR = path.resolve(__dirname, '..');
const pagesYmlRaw = fs.readFileSync(path.join(ROOT_DIR, '.pages.yml'), 'utf8');
const config = yaml.load(pagesYmlRaw);

console.log('=== PAGES CMS CONFIG AUDIT ===');
console.log('Media folders:');
if (config.media) {
  for (const m of config.media) {
    console.log(` - ${m.name}: input="${m.input}", output="${m.output}" (exists: ${fs.existsSync(path.join(ROOT_DIR, m.input))})`);
  }
}

const issues = [];

function checkObjectFields(prefix, cmsFields, jsonObject) {
  if (!cmsFields || !jsonObject || typeof jsonObject !== 'object') return;

  const cmsFieldMap = new Map();
  cmsFields.forEach(f => cmsFieldMap.set(f.name, f));

  // Check fields in JSON that are NOT in CMS
  for (const key of Object.keys(jsonObject)) {
    const fullPath = prefix ? `${prefix}.${key}` : key;
    if (!cmsFieldMap.has(key)) {
      issues.push({ type: 'JSON_KEY_NOT_IN_CMS', path: fullPath, value: jsonObject[key] });
    } else {
      const cmsField = cmsFieldMap.get(key);
      const val = jsonObject[key];
      // Check nested objects
      if (cmsField.type === 'object' && cmsField.fields && val && typeof val === 'object' && !Array.isArray(val)) {
        checkObjectFields(fullPath, cmsField.fields, val);
      }
      // Check list of objects
      if (cmsField.type === 'list' && Array.isArray(val)) {
        if (cmsField.fields) {
          val.forEach((item, idx) => {
            if (typeof item === 'object' && item !== null) {
              checkObjectFields(`${fullPath}[${idx}]`, cmsField.fields, item);
            }
          });
        }
      }
    }
  }

  // Check fields in CMS that are NOT in JSON
  for (const [name, f] of cmsFieldMap.entries()) {
    const fullPath = prefix ? `${prefix}.${name}` : name;
    if (!(name in jsonObject)) {
      issues.push({ type: 'CMS_FIELD_NOT_IN_JSON', path: fullPath, cmsType: f.type });
    }
  }
}

for (const entry of config.content) {
  const targetPath = path.join(ROOT_DIR, entry.path);

  if (!fs.existsSync(targetPath)) {
    issues.push({ type: 'MISSING_PATH', path: entry.path, name: entry.name });
    continue;
  }

  if (entry.type === 'file') {
    if (entry.format === 'json' || entry.path.endsWith('.json')) {
      try {
        const data = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
        checkObjectFields(entry.name, entry.fields, data);
      } catch (err) {
        issues.push({ type: 'JSON_PARSE_ERROR', file: entry.path, error: err.message });
      }
    }
  } else if (entry.type === 'collection') {
    const files = fs.readdirSync(targetPath);
    for (const f of files) {
      const filePath = path.join(targetPath, f);
      const stat = fs.statSync(filePath);
      if (stat.isFile()) {
        if (f.endsWith('.json')) {
          try {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            checkObjectFields(`${entry.name}:${f}`, entry.fields, data);
          } catch (err) {
            issues.push({ type: 'JSON_PARSE_ERROR', file: `${entry.path}/${f}`, error: err.message });
          }
        } else if (f.endsWith('.md')) {
          const raw = fs.readFileSync(filePath, 'utf8');
          const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
          if (match) {
            try {
              const frontmatter = yaml.load(match[1]);
              // Body is in markdown body
              frontmatter.body = raw.slice(match[0].length);
              checkObjectFields(`${entry.name}:${f}`, entry.fields, frontmatter);
            } catch (err) {
              issues.push({ type: 'YAML_PARSE_ERROR', file: `${entry.path}/${f}`, error: err.message });
            }
          }
        }
      }
    }
  }
}

console.log(`\nAudit completed: Found ${issues.length} discrepancies.`);
const grouped = {};
for (const iss of issues) {
  grouped[iss.type] = (grouped[iss.type] || 0) + 1;
}
console.log('Issues by type:', grouped);

for (const iss of issues) {
  console.log(` [${iss.type}] ${iss.path}`);
}
