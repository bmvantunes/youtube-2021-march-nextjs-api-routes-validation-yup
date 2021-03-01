import { array, number, object, string, TypeOf } from 'yup';

export const personSchema = object({
  name: string().required().min(2),
  age: number().required().integer().min(18),
  email: string().optional().email(),
  personalWebsite: string().optional().url(),
  nationalities: array(
    object({
      country: string().required().oneOf(['PT', 'UK']),
      observation: string().optional().max(5000),
    })
  ).required().min(1),
});

export type Person = TypeOf<typeof personSchema>;