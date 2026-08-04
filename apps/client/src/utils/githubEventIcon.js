import {
  GitCommitHorizontal,
  GitFork,
  Star,
  GitPullRequest,
  CircleDot,
  FolderPlus,
} from "lucide-react";

const icons = {
  PushEvent: GitCommitHorizontal,
  ForkEvent: GitFork,
  WatchEvent: Star,
  PullRequestEvent: GitPullRequest,
  IssuesEvent: CircleDot,
  CreateEvent: FolderPlus,
};

export default function githubEventIcon(type) {
  return icons[type] ?? GitCommitHorizontal;
}
