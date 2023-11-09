import { Component, inject } from '@angular/core';
import { IArticle } from 'src/app/interfaces/iarticle';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  articleService = inject(ArticleService)

  arrArticles: IArticle[] = []

  ngOnInit() {
    this.arrArticles = this.articleService.getAll()
  }

}
