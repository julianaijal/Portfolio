export interface IArticle {
  title: string;
  slug: string;
  url: string;
  image?: string | null;
  cta?: string;
  symbol?: {
    url: string;
  };
}

export interface IShowcaseEntry {
  title: string;
}

export interface IArticles {
  articles: IArticle[];
  articlesnew?:IArticle[];
}

export interface IShowcase {
  entries: IShowcaseEntry[];
}

export interface IArticleDynamic {
  params: Promise<{
    slug: string;
    title: string;
  }>;
}