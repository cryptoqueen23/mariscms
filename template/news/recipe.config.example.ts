export const newsRecipe = {
  publication: {
    name: "Publication Name",
    tagline: "Local news that matters.",
    locale: "en-US",
    timezone: "America/Chicago",
  },

  sections: [
    "Local",
    "Government",
    "Schools",
    "Business",
    "Community",
    "Investigations",
    "Opinion",
  ],

  opinionTypes: [
    "From the Publisher",
    "Community Voices",
    "Letters to the Editor",
  ],

  workflow: {
    editorial: true,
    states: ["draft", "review", "publish"],
  },

  features: {
    briefs: true,
    authors: true,
    tags: true,
    search: true,
    rss: true,
    sitemap: true,
    corrections: true,
    seo: true,
  },
} as const;
