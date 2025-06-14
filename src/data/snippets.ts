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
      },
      {
        title: "Trailer Logic",
        description: "Determines which trailer types a load fits in and provides a recommendation.",
        code: `export function getFitsIn(totalCartEquiv: number): FitsIn {
  return {
    pup: totalCartEquiv <= 25,
    '50ft': totalCartEquiv <= 38,
    straight: totalCartEquiv <= 20,
  };
}

export function getRecommendation(fitsIn: FitsIn): string {
  const options = [];
  if (fitsIn.pup) options.push('Pup');
  if (fitsIn['50ft']) options.push('50 ft');
  if (fitsIn.straight) options.push('Straight Truck');

  const allFit = fitsIn.pup && fitsIn['50ft'] && fitsIn.straight;
  if (allFit) return 'Any Available';

  return options.length > 0 ? options.join(', ') : 'None – exceeds all capacities';
}`,
        language: "ts",
      }
    ],
    "swoletrac-workout-app": [
      {
        title: "Workout Streaks",
        description: "A React component to display the user's current and longest workout streaks.",
        code: `interface WorkoutStreaksProps {
  currentStreak: number;
  longestStreak: number;
}

export default function WorkoutStreaks({
  currentStreak,
  longestStreak,
}: WorkoutStreaksProps) {
  return (
    <div className="card bg-base-200 shadow">
      <div className="card-body">
        <h2 className="card-title flex items-center gap-2 text-lg">
          <span>🔥</span>
          Streaks
        </h2>
        <div className="mt-2 text-sm">
          <p>
            Current:{" "}
            <span className="text-xl font-bold text-primary">{currentStreak}</span> days
          </p>
          <p>
            Longest:{" "}
            <span className="text-xl font-bold text-primary">{longestStreak}</span> days
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Streaks are counted by consecutive workout days.
            {(!currentStreak && !longestStreak) && (
              <span className="block mt-1 italic">
                Every journey begins with a single step. Start today! 💪
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
`,
        language: "tsx",
      },
      {
        title: "Workout Volume Calculation",
        description: "Computes total volume from sets (weight x reps).",
        code: `export function calculateVolume(sets: { reps: number; weight: number }[]): number {
    return sets.reduce((total, set) => total + set.reps * set.weight, 0);
  }`,
        language: "ts",
      },
      {
        title: "Category Icons",
        description: "Returns an emoji icon for a given workout category.",
        code: `export function getCategoryIcon(category: string): string {
  switch (category) {
    case "weight_training":
      return "🏋️‍♂️";
    case "cardio":
      return "🔥";
    case "calisthenics":
      return "🤸‍♂️";
    default:
      return "💪";
  }
}`,
        language: "ts",
      }
    ],
    "headless-shopify-store": [
      {
        title: "Update Cart Quantity",
        description: "Updates the quantity of a specific item in the cart, triggering the floating cart bar to reflect current status and support checkout visibility.",
        code: `const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity < 1) return;
    hydrateCart();
    setCart((prev) => {
      const item = prev.find((item) => item.id === id);
      if (item) {
        showNotification(\`Updated "\${item.title}" quantity\`);
        log(\`Updated "\${item.title}" to quantity \${quantity}\`);
      }
      return prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    });
  }, [hydrateCart, log, showNotification]);`,
        language: "ts",
      }
    ],
    "clayton-c-music": [
      {
        title: "Filter Events by Date",
        description: "Filters events for date and puts them in upcoming of past events respectively.",
        code: `const now = new Date();
const pastEvents = events
  .filter(event => new Date(event.date) < now)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

return pastEvents.length > 0 ? (
  <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {pastEvents.map((event) => (
      <motion.div
        key={event.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <EventCard event={event} />
      </motion.div>
    ))}
  </div>
) : (
  <p className="text-center text-[hsl(var(--foreground-muted))]">
    No past events to show yet.
  </p>
);`,
        language: "ts",
      }
    ],
    "pet-age-calculator": [
  {
    title: "Advanced Pet Age Converter",
    description:
      "Converts pet age to human years and vice versa for dogs and cats, supporting direction and dog size.",
    code: `export default function calculatePetAge(
  species: Species,
  direction: Direction,
  age: number,
  size?: DogSize
): string {
  let converted: number;

  if (species === 'dog') {
    converted =
      direction === 'toHuman'
        ? calculateDogToHuman(age, size)
        : calculateDogToPet(age, size);
    return direction === 'toHuman'
      ? \`A \${age}-year-old \${size ?? 'medium'} dog is about \${converted} in human years.\`
      : \`\${age} human years is about \${converted.toFixed(1)} in \${size ?? 'medium'} dog years.\`;
  }

  if (species === 'cat') {
    converted =
      direction === 'toHuman'
        ? calculateCatToHuman(age)
        : calculateCatToPet(age);
    return direction === 'toHuman'
      ? \`A \${age}-year-old cat is about \${converted} in human years.\`
      : \`\${age} human years is about \${converted.toFixed(1)} in cat years.\`;
  }

  return 'Invalid species or direction.';
}`,
    language: "ts",
  },
],
 "personal-portfolio": [
  {
    title: "Code Snippet Accordion",
    description: "A reusable accordion component for displaying code snippets.",  
    code: `export default function CodeSnippetAccordion({
    snippets,
    title = "Code Snippets",
}: {
    snippets: CodeSnippet[];
    title?: string;
}) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { theme } = useTheme();

    return (
        <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                <Code className="w-5 h-5" /> {title}
            </h2>
            {snippets.map((snippet, i) => (
                <div key={i} className="border border-foreground-muted/20 rounded-lg">
                    <button
                        type="button"
                        className="w-full text-left px-4 py-3 bg-surface hover:bg-[hsl(var(--card-hover))] transition-colors font-medium"
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    >
                        {snippet.title}
                    </button>
                    {openIndex === i && (
                        <div className="p-4 bg-card">
                            {snippet.description && (
                                <p className="mb-2 text-sm text-foreground-muted">{snippet.description}</p>
                            )}
                            <SyntaxHighlighter
                                language={snippet.language || "ts"}
                                style={theme === "dark" ? atomOneDark : atomOneLight}
                                wrapLongLines={true}
                                customStyle={{
                                    borderRadius: "0.5rem",
                                    fontSize: "0.875rem",
                                    padding: "1rem",
                                }}
                            >
                                {snippet.code}
                            </SyntaxHighlighter>
                        </div>
                    )}
                </div>
            ))}
        </div>
      );
      `,
      language: "tsx",
    },
    {
      title: "Readme Drawer",
      description: "Fetches a GitHub repository's README and toggles a drawer to display it.",
      code: `const fetchReadme = async () => {
  setLoading(true);
  setError(false);

  try {
    const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)(?:\.git)?/);
    if (!match) throw new Error('Bad GitHub URL');

    const [, user, repo] = match;
    const branches = ['main', 'master'];

    for (const branch of branches) {
      const res = await fetch(
        \`https://raw.githubusercontent.com/\${user}/\${repo}/\${branch}/README.md\`
      );
      if (res.ok) {
        setMarkdown(await res.text());
        return;
      }
    }
    throw new Error('README not found');
  } catch {
    setError(true);
  } finally {
    setLoading(false);
    setFetched(true);
  }
};

/* Toggle drawer --------------------------------------------------- */
const handleToggle = () => {
  setIsOpen((prev) => !prev);
  if (!fetched) void fetchReadme();
};`,
      language: "ts",
    },
  ],
    "countries-explorer": [
      {
        title: "Floating Pagination UI",
        description: "There are a lot of Countries! Renders pagination buttons for navigating between pages in the countries explorer. Floating came later since the user should be able to skip pages anytime",
        code: ` <nav
            aria-label="Pagination"
            className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4
                 rounded-full bg-[var(--surface)]/80 px-4 py-2 shadow-lg
                 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md"
        >
            {/* Prev button */}
            <button
                onClick={() => canPrev && onChange(page - 1)}
                disabled={!canPrev}
                aria-label="Previous page"
                className="grid h-10 w-10 place-items-center rounded-full
                   transition hover:ring-2 hover:ring-[var(--accent)]/40
                   disabled:opacity-40 disabled:hover:ring-0"
            >
                <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Page indicator */}
            <span className="hidden min-w-[5.5rem] select-none text-sm sm:inline">
                Page <strong>{page}</strong> / {totalPages}
            </span>

            {/* Next button */}
            <button
                onClick={() => canNext && onChange(page + 1)}
                disabled={!canNext}
                aria-label="Next page"
                className="grid h-10 w-10 place-items-center rounded-full
                   transition hover:ring-2 hover:ring-[var(--accent)]/40
                   disabled:opacity-40 disabled:hover:ring-0"
            >
                <ChevronRight className="h-5 w-5" />
            </button>
        </nav>` ,
        language: "tsx",
      },
      {
        title: "Fetch All Countries",
        description: "Fetches all countries data from the REST Countries API and returns it. We can cache this data in using our api for performance.",
        code: `/**
   * Fetch *all* countries (lightweight data) from our internal '/api/countries'.
   * This is constrained to ≤10 fields to keep external API happy & list fast.
   */
  export async function getCountries(): Promise<Country[]> {
    const res = await fetch(\`\${BASE_URL}/api/countries\`, { cache: "no-store" });

    if (!res.ok) throw new Error("Failed to fetch countries");

    return res.json();
  }`,
      },
      {
        title: "Deep Dive into Country Details",
        description: "This represents my first drilling expedition into the countries API. My goal was to discover and consume as much of the data as possible, including languages, currencies, and more.",
        code: `import { notFound } from 'next/navigation';
import CountryDeepDive from '@/components/CountryDeepDive';
import { getCountryByCode } from '@/lib/countries';

export default async function DeepPage({
    params,
}: {
    params: { code: string };
}) {
    const country = await getCountryByCode(params.code);
    if (!country) return notFound();

    return <CountryDeepDive country={country} />;
}`
      }
    ],

  };
