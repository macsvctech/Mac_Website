const fs = require('fs');

let yml = fs.readFileSync('.pages.yml', 'utf8');

// Helper to insert a toggle at the start of a fields list
function insertFieldAtFieldsStart(targetHeader, fieldYaml) {
  const idx = yml.indexOf(targetHeader);
  if (idx === -1) {
    console.warn('Target header not found:', targetHeader);
    return;
  }
  const fieldsIdx = yml.indexOf('fields:', idx);
  if (fieldsIdx === -1 || fieldsIdx - idx > 300) {
    console.warn('fields: not found near:', targetHeader);
    return;
  }
  const afterFields = fieldsIdx + 'fields:'.length;
  yml = yml.slice(0, afterFields) + '\n' + fieldYaml + yml.slice(afterFields);
  console.log('Inserted field into:', targetHeader);
}

// 1. Collections: testimonials, events, gallery, intel_articles
insertFieldAtFieldsStart('name: testimonials\n    label:', '      - name: enabled\n        label: "Visible on Website? (Toggle ON/OFF)"\n        type: boolean\n        default: true');
insertFieldAtFieldsStart('name: events\n    label:', '      - name: enabled\n        label: "Visible on Website? (Toggle ON/OFF)"\n        type: boolean\n        default: true');
insertFieldAtFieldsStart('name: gallery\n    label:', '      - name: enabled\n        label: "Visible on Website? (Toggle ON/OFF)"\n        type: boolean\n        default: true');
insertFieldAtFieldsStart('name: intel_articles\n    label:', '      - name: enabled\n        label: "Publish on Website? (Toggle ON/OFF)"\n        type: boolean\n        default: true');

// 2. Home Page sections
insertFieldAtFieldsStart('name: hero\n        label: Hero Blueprint Terminal', '          - name: enabled\n            label: "Show Hero Section?"\n            type: boolean\n            default: true');
insertFieldAtFieldsStart('name: receipts\n        label: The Receipts', '          - name: enabled\n            label: "Show The Receipts / Verified Metrics Section?"\n            type: boolean\n            default: true');
insertFieldAtFieldsStart('name: metrics\n            label: 5 Metrics Counter Cells', '              - name: enabled\n                label: "Show This Counter Cell?"\n                type: boolean\n                default: true');
insertFieldAtFieldsStart('name: machinery\n        label: The Machinery', '          - name: enabled\n            label: "Show The Machinery / Departments Grid?"\n            type: boolean\n            default: true');
insertFieldAtFieldsStart('name: sponsors\n        label: Backed By Giants', '          - name: enabled\n            label: "Show Corporate Sponsors Belt?"\n            type: boolean\n            default: true');
insertFieldAtFieldsStart('name: freshPress\n        label: Fresh Off The Press', '          - name: enabled\n            label: "Show Fresh Off The Press / Live Feed Section?"\n            type: boolean\n            default: true');

// 3. Blueprint Page sections
insertFieldAtFieldsStart('name: manifesto\n        label: Section 2.1 — The Club Manifesto', '          - name: enabled\n            label: "Show Society Manifesto Frame?"\n            type: boolean\n            default: true');
insertFieldAtFieldsStart('name: architecture\n        label: Section 2.2 — Architecture & Pillars', '          - name: enabled\n            label: "Show Architecture & Pillars Strip?"\n            type: boolean\n            default: true');
insertFieldAtFieldsStart('name: plaques\n        label: Section 2.3 — Cornerstone Plaques', '          - name: enabled\n            label: "Show Cornerstone Plaques Bento?"\n            type: boolean\n            default: true');
insertFieldAtFieldsStart('name: wings\n        label: Section 2.4 — Operational Wings', '          - name: enabled\n            label: "Show Operational Wings Breakdown?"\n            type: boolean\n            default: true');
insertFieldAtFieldsStart('name: exitLogs\n        label: Section 2.5 — Declassified Exit Logs', '          - name: enabled\n            label: "Show Presidential Exit Logs Section?"\n            type: boolean\n            default: true');

// 4. Arena sections
insertFieldAtFieldsStart('name: radar\n        label: Operation Radar Terminal', '          - name: enabled\n            label: "Show Next Operation Radar Banner?"\n            type: boolean\n            default: true');
insertFieldAtFieldsStart('name: flagshipSection\n        label: Flagship Conclaves Section', '          - name: enabled\n            label: "Show Flagship Conclaves Header?"\n            type: boolean\n            default: true');
insertFieldAtFieldsStart('name: evidenceWallSection\n        label: Evidence Wall Gallery', '          - name: enabled\n            label: "Show Evidence Wall Gallery Section?"\n            type: boolean\n            default: true');

// 5. Intel sections
insertFieldAtFieldsStart('name: maczine\n        label: Annual MACzine Spotlight', '          - name: enabled\n            label: "Show Annual MACzine Hero Spotlight?"\n            type: boolean\n            default: true');
insertFieldAtFieldsStart('name: feedSection\n        label: Research Feed Header', '          - name: enabled\n            label: "Show Filterable Research Feed Section?"\n            type: boolean\n            default: true');
insertFieldAtFieldsStart('name: archiveSection\n        label: Intel Archive Directory', '          - name: enabled\n            label: "Show Intel Archive & Field Manuals Section?"\n            type: boolean\n            default: true');

// 6. Testimonials Page
insertFieldAtFieldsStart('name: testimonials_page\n    label:', '      - name: statsEnabled\n        label: "Show Top Telemetry Metrics Strip?"\n        type: boolean\n        default: true');

// 7. Contact Page
insertFieldAtFieldsStart('name: contact_page\n    label:', '      - name: terminalEnabled\n        label: "Show Contact Form Terminal?"\n        type: boolean\n        default: true\n      - name: sponsorshipEnabled\n        label: "Show Partnership & Sponsorship Deck Download?"\n        type: boolean\n        default: true\n      - name: externalChannelsEnabled\n        label: "Show External Telemetry & Social Channels?"\n        type: boolean\n        default: true');
insertFieldAtFieldsStart('name: coordinates\n        label: Physical HQ Coordinates', '          - name: enabled\n            label: "Show Coordinates & Blueprint Map Card?"\n            type: boolean\n            default: true');

// 8. Roster Team
insertFieldAtFieldsStart('name: coreCommand\n        label: High Command Council', '          - name: enabled\n            label: "Show This Officer Badge?"\n            type: boolean\n            default: true');
insertFieldAtFieldsStart('name: coordinators\n            label: Lead Coordinators & Directors', '              - name: enabled\n                label: "Show This Coordinator Card?"\n                type: boolean\n                default: true');
insertFieldAtFieldsStart('name: directoryTable\n            label: Active Cadre Directory Table', '              - name: enabled\n                label: "Show This Cadre Member Row?"\n                type: boolean\n                default: true');

fs.writeFileSync('.pages.yml', yml, 'utf8');
console.log('All toggles written to .pages.yml successfully!');
