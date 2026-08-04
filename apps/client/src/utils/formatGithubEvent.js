const eventNames = {
  PushEvent: "Push",

  CreateEvent: "Created Repository",

  DeleteEvent: "Deleted Branch",

  ForkEvent: "Fork",

  WatchEvent: "Star",

  PullRequestEvent: "Pull Request",

  IssuesEvent: "Issue",

  ReleaseEvent: "Release",
};

export default function formatGithubEvent(type) {
  return eventNames[type] ?? type;
}
