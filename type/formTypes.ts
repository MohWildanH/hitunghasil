import { z } from "zod"

// Define the schema for the form
export const formSchema = z.object({
  modalAwal: z.string().nonempty("Modal Awal is required."),
  modalAkhir: z.string().nonempty("Modal Akhir is required."),
})

// Export the inferred TypeScript type
export type FormValues = z.infer<typeof formSchema>
