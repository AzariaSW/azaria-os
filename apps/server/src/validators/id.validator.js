import { z } from "zod";

export const idParams = z.object({
    id: z.string().uuid()
});

export default z.object({
    params: idParams
});