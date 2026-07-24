import { useMutation } from "@tanstack/react-query";

import { profileService } from "../../../services";
import queryClient from "../../../lib/queryClient";
import { queryKeys } from "../../../lib/queryKeys";

export default function useUpdateProfile() {
  return useMutation({
    mutationFn: profileService.updateProfile,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.profile,
      });
    },
  });
}