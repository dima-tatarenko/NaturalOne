import { Component, inject } from '@angular/core';
import { IArticle } from 'src/app/interfaces/iarticle';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.css']
})
export class DndComponent {

  articleService = inject(ArticleService)

  arrArticles: IArticle[] = []

  ngOnInit() {
    this.arrArticles = this.articleService.getByCategory('dnd')
    console.log(this.arrArticles)
  }

}
