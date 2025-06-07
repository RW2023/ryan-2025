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
    ],
    "swoletrac-workout-app": [
      {
        title: "Workout Volume Calculation",
        description: "Computes total volume from sets (weight x reps).",
        code: `export function calculateVolume(sets: { reps: number; weight: number }[]): number {
    return sets.reduce((total, set) => total + set.reps * set.weight, 0);
  }`,
        language: "ts",
      },
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
      language: "jsx",
    },
  ],
  };
