const githubConfig = Object.freeze({
  apiBaseUrl: "https://api.github.com",

  username: "AzariaSW",

  timeout: 10000,

  cache: {
    ttl: 15 * 60 * 1000,

    PROJECTS: 5 * 60 * 1000,

    PROFILE: 60 * 60 * 1000,

    keys: {
      activity: "github:activity",

      repositories: "github:repositories",
    },
  },
});

export default githubConfig;
