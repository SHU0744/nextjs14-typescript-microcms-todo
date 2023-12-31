export type dataType = {
  contents: contentsType[];
  totalCount: number;
  offset: number;
  limit: number;
};
export type contentsType = {
  id: string;
  title: string;
};
