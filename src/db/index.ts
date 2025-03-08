import { Index } from '@upstash/vector';

type Product = {
  id: string;
  imageId: string;
  name: string;
  size: ""
};
export const db = new Index<Product>();
