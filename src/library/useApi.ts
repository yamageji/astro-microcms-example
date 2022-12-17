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
  try {
    return await client.get<CatsResponse>({ endpoint: 'cats', queries });
  } catch (error) {
    console.log('~~ getCats ~~');
    console.log(error);
  }
};
export const getCat = async (contentId: string, queries?: MicroCMSQueries) => {
  try {
    return await client.getListDetail<Cats>({
      endpoint: 'cats',
      contentId,
      queries,
    });
  } catch (error) {
    console.log('~~ getCats ~~');
    console.log(error);
  }
};
