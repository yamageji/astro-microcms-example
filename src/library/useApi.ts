import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSListResponse,
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from 'microcms-js-sdk';

export type Cats = {
  title: string;
  date: string;
  image: MicroCMSImage;
  category: ['mugi', 'hana'];
  content: string;
};
export type CatsResponse = MicroCMSListResponse<Cats>;
export type CatResponse = Cats & MicroCMSListContent;

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export const getCats = async (queries?: MicroCMSQueries) => {
  return await client.get<CatsResponse>({ endpoint: 'cats', queries });
};
export const getCat = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<Cats>({
    endpoint: 'cats',
    contentId,
    queries,
  });
};
