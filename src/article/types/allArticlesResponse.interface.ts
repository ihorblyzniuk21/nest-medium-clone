import { ArticleType } from '@app/article/types/article.type';

export interface AllArticlesResponseInterface {
  articles: ArticleType[];
  articlesCount: number;
}
