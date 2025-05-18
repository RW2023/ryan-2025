// data/snippets.ts

export type CodeSnippet = {
    title: string;
    description?: string;
    code: string;
    language?: string;
  };
  
  export const snippetsBySlug: Record<string, CodeSnippet[]> = {
    "load-planner": [
      {
        title: "Sideways Loading Logic",
        description: "Determines if a load needs to be rotated to fit.",
        code: `export function requiresSidewaysLoading(carts: number, bins: number): boolean {
    const total = carts + bins;
    return total % 2 !== 0;
  }`,
        language: "ts",
      }
    ],
    "swoletrac": [
      {
        title: "Workout Volume Calculation",
        description: "Computes total volume from sets (weight x reps).",
        code: `export function calculateVolume(sets: { reps: number; weight: number }[]): number {
    return sets.reduce((total, set) => total + set.reps * set.weight, 0);
  }`,
        language: "ts",
      }
    ],
  };
  