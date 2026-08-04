export const queryKeys = {
  profile: ["profile"],

  projects: ["projects"],

  project: (id) => ["projects", "detail", id],

  skills: ["skills"],
  skillCategories: ["skills", "categories"],

  experiences: ["experiences"],
  experienceRoles: ["experiences", "roles"],

  educations: ["educations"],

  certificates: ["certificates"],

  github: {
    profile: ["github", "profile"],
    repositories: ["github", "repositories"],
    activity: ["github", "activity"],
  },

  messages: ["messages"],
};
