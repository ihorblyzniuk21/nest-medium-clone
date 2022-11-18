import { Controller } from '@nestjs/common';
import { ArticleService } from '@app/article/article.service';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
}
