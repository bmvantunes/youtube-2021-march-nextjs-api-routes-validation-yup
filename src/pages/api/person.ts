// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import { validate } from '../../middleware/validate';
import { personSchema } from '../../schemas/person';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ ...req.body, method: req.method });
};

export default validate(personSchema, handler);
