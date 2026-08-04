import { useQuery } from "@tanstack/react-query";

import { githubService } from "../../../services";
import { queryKeys } from "../../../lib/queryKeys";

export default function useGithubActivity() {
  return useQuery({
    queryKey: queryKeys.github.activity,
    queryFn: githubService.getGithubActivity,
  });
}
