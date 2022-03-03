export function clamp(min: number, max: number, current: number) {
    if (current < min) return min;
    else if (current > max) return max;
    else return current;
}