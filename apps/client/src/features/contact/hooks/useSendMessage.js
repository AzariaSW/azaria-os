import { useMutation } from "@tanstack/react-query";

import { contactService } from "../../../services";
import mutationOptions from "../../../lib/mutationOptions";

export default function useSendMessage(options = {}) {
  return useMutation({
    mutationFn: contactService.sendContactMessage,
    ...mutationOptions({
      successMessage: "Message sent successfully.",

      ...options,
    }),
  });
}
