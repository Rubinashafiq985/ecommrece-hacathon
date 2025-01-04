import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const compareArrays = (a: string[], b: string[]) => {
  return a.toString() === b.toString();
};
