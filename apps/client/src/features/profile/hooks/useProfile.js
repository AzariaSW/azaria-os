import { useQuery } from "@tanstack/react-query";

import { profileService } from "../../../services";
import { queryKeys } from "../../../lib/queryKeys";

export default function useProfile() {
  return useQuery({
    queryKey: queryKeys.profile,
    queryFn: profileService.getProfile,
  });
}
