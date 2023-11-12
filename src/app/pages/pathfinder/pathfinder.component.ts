import { Component, inject } from '@angular/core';
import { IArticle } from 'src/app/interfaces/iarticle';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'pathfinder',
  templateUrl: './pathfinder.component.html',
  styleUrls: ['./pathfinder.component.css']
})
export class PathfinderComponent {

  articleService = inject(ArticleService)

  arrArticles: IArticle[] = []

  ngOnInit() {
    this.arrArticles = this.articleService.getByCategory('pathfinder')
  }

}
