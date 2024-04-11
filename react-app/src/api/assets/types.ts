type VideoResponseData = {
  id: number;
  attributes: VideoAttributes;
};

type ArticleResponseData = {
  id: number;
  attributes: ArticleAttributes;
};

export type VideoAttributes = {
  Title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  VidoContent: Content;
};

export type ArticleAttributes = {
  Title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  ArticleImage: Content;
  ArticleContent: Content;
};

type Content = {
  data: Data;
};

type Data = {
  id: number;
  attributes: Attributes;
};

type Attributes = {
  name: string;
  alternativeText: any;
  caption: any;
  width: any;
  height: any;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  isUrlSigned: boolean;
};

type Meta = {
  pagination: PaginationResponse;
};

type PaginationResponse = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

type PaginationRequest = {
  cursor?: string;
  take: number;
};

export type GetTrainingArticlesRequest = PaginationRequest;

export type GetTrainingArticlesResponse = {
  data: ArticleResponseData[];
  meta: Meta;
};

export type GetTrainingVideosRequest = PaginationRequest;

export type GetTrainingVideosResponse = {
  data: VideoResponseData[];
  meta: Meta;
};
