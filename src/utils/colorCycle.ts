/**
 * Brutalist Blueprint Color Cycle Helper
 * Enforces "Junior-Proof" CMS styling by automatically cycling through
 * approved brutalist brand accents based on list index (0, 1, 2, 3...)
 * so non-technical editors never need to manually enter hex color codes.
 */

export interface ColorToken {
  name: "mac-yellow" | "electric-cyan" | "system-red" | "pure-white" | "tactical-stone";
  bg: string;
  text: string;
  border: string;
  bgClass: string;
  textClass: string;
  badgeClass: string;
  btnClass: string;
  cardClass: string;
  hoverSwapClass: string;
}

export const BRUTALIST_PALETTE: ColorToken[] = [
  {
    name: "mac-yellow",
    bg: "#F0C903",
    text: "#000000",
    border: "#000000",
    bgClass: "bg-mac-yellow",
    textClass: "text-stark-black",
    badgeClass: "bg-mac-yellow text-stark-black border-2 border-stark-black shadow-brutal-sm",
    btnClass: "arcade-btn btn-yellow",
    cardClass: "bg-mac-yellow text-stark-black border-2 border-stark-black",
    hoverSwapClass: "hover:bg-stark-black hover:text-mac-yellow",
  },
  {
    name: "electric-cyan",
    bg: "#00E5FF",
    text: "#000000",
    border: "#000000",
    bgClass: "bg-electric-cyan",
    textClass: "text-stark-black",
    badgeClass: "bg-electric-cyan text-stark-black border-2 border-stark-black shadow-brutal-sm",
    btnClass: "arcade-btn btn-cyan",
    cardClass: "bg-electric-cyan text-stark-black border-2 border-stark-black",
    hoverSwapClass: "hover:bg-stark-black hover:text-electric-cyan",
  },
  {
    name: "system-red",
    bg: "#FF3B30",
    text: "#FFFFFF",
    border: "#000000",
    bgClass: "bg-system-red",
    textClass: "text-pure-white",
    badgeClass: "bg-system-red text-pure-white border-2 border-stark-black shadow-brutal-sm",
    btnClass: "arcade-btn btn-red",
    cardClass: "bg-system-red text-pure-white border-2 border-stark-black",
    hoverSwapClass: "hover:bg-stark-black hover:text-system-red",
  },
  {
    name: "pure-white",
    bg: "#FFFFFF",
    text: "#000000",
    border: "#000000",
    bgClass: "bg-pure-white",
    textClass: "text-stark-black",
    badgeClass: "bg-pure-white text-stark-black border-2 border-stark-black shadow-brutal-sm",
    btnClass: "arcade-btn btn-white",
    cardClass: "bg-pure-white text-stark-black border-2 border-stark-black",
    hoverSwapClass: "hover:bg-stark-black hover:text-pure-white",
  },
  {
    name: "tactical-stone",
    bg: "#EAE2D0",
    text: "#000000",
    border: "#000000",
    bgClass: "bg-tactical-stone",
    textClass: "text-stark-black",
    badgeClass: "bg-tactical-stone text-stark-black border-2 border-stark-black shadow-brutal-sm",
    btnClass: "arcade-btn btn-stone",
    cardClass: "bg-tactical-stone text-stark-black border-2 border-stark-black",
    hoverSwapClass: "hover:bg-stark-black hover:text-pure-white",
  },
];

/**
 * Returns a complete color token bundle for any given numeric index.
 * Automatically wraps around using modulo math.
 */
export function getColorCycle(index: number): ColorToken {
  const safeIndex = Math.abs(Math.floor(index)) % BRUTALIST_PALETTE.length;
  return BRUTALIST_PALETTE[safeIndex];
}

/**
 * Convenience helper to return just the background hex.
 */
export function getBgHex(index: number): string {
  return getColorCycle(index).bg;
}

/**
 * Convenience helper to return just the high-contrast text hex.
 */
export function getTextHex(index: number): string {
  return getColorCycle(index).text;
}

/**
 * Convenience helper to return just the background Tailwind class.
 */
export function getBgClass(index: number): string {
  return getColorCycle(index).bgClass;
}
