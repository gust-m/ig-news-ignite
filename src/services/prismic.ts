import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

export const getPrismicClient = (req?: unknown): DefaultClient => {
  const prismic = Prismic.client(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req,
  });

  return prismic;
};
