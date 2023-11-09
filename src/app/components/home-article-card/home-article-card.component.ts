import { Component, inject } from '@angular/core';
import { IArticle } from 'src/app/interfaces/iarticle';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'home-article-card',
  templateUrl: './home-article-card.component.html',
  styleUrls: ['./home-article-card.component.css']
})
export class HomeArticleCardComponent {

  articleService = inject(ArticleService)

  arrArticles: IArticle[] = []



}
