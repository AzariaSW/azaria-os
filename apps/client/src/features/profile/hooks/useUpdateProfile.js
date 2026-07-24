import { useMutation } from "@tanstack/react-query";

import { profileService } from "../../../services";
import queryClient from "../../../lib/queryClient";
import { queryKeys } from "../../../lib/queryKeys";
import mutationOptions from "../../../lib/mutationOptions";

export default function useUpdateProfile() {
  return useMutation({
    mutationFn: profileService.updateProfile,

    ...mutationOptions({
      successMessage: "Profile updated.",

      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: queryKeys.profile,
        });
      },
    }),
  });
}
