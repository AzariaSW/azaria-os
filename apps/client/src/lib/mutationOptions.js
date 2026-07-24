import toast from "./toast";
import { getErrorMessage } from "../utils/error";

export default function mutationOptions({
  successMessage,
  onSuccess,
  onError,
} = {}) {
  return {
    onSuccess(data, variables, context) {
      if (successMessage) {
        toast.success(successMessage);
      }

      onSuccess?.(data, variables, context);
    },

    onError(error, variables, context) {
      toast.error(getErrorMessage(error));

      onError?.(error, variables, context);
    },
  };
}
