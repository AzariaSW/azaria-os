const GITHUB = Object.freeze({
  API_URL: "https://api.github.com",

  USERNAME: "AzariaSW",

  USER_AGENT: "AzariaPortfolio",

  TIMEOUT: 10000,

  CACHE: {
    TTL: 15 * 60 * 1000,

    PROJECTS: 5 * 60 * 1000,

    PROFILE: 60 * 60 * 1000,

    KEYS: {
      ACTIVITY: "github:activity",

      PROFILE: "github:profile",

      REPOSITORIES: "github:repositories",

      EVENTS: "github:events",
    },
  },
});

export default GITHUB;
