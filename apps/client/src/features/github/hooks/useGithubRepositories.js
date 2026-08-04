import { useQuery } from "@tanstack/react-query";

import { githubService } from "../../../services";
import { queryKeys } from "../../../lib/queryKeys";

export default function useGithubRepositories() {
  return useQuery({
    queryKey: queryKeys.github.repositories,
    queryFn: githubService.getGithubRepositories,
  });
}