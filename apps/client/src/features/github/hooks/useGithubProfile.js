import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "../../../lib/queryKeys";
import { githubService } from "../../../services";

export default function useGithubProfile() {
  return useQuery({
    queryKey: queryKeys.github.profile,
    queryFn: githubService.getGithubProfile,
  });
}