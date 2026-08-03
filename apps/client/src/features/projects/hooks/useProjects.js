import { useQuery } from "@tanstack/react-query";

import { projectService } from "../../../services";
import { queryKeys } from "../../../lib/queryKeys";

export default function useProjects() {
  return useQuery({
    queryKey: queryKeys.projects,
    queryFn: projectService.getProjects,
  });
}
