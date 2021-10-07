// HELPERS
import type { Color } from "./global";
import { colors } from "./global";

export function getColor(color: Color, opacity = 1): string {

    return `rgba(${colors[color]},${opacity})`;
}