import { useQuery } from "@tanstack/react-query";

import { skillService } from "../../../services";
import { queryKeys } from "../../../lib/queryKeys";

export default function useSkills() {
  return useQuery({
    queryKey: queryKeys.skills,
    queryFn: skillService.getSkills,
  });
}