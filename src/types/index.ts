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

export type initStateType = {
  a: number;
  b: number;
  result: number;
};

export type typePayloadType = {
  type: string;
  payload: {
    name: string;
    value: number;
  };
};
