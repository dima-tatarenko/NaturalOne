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
    if (localStorage.getItem('arrLocalArticles')) {
      this.articleService.loadLocalArticles()
      this.articleService.updateCounter()
    }

    this.arrArticles = this.articleService.getFront()
    console.log(this.articleService.getFront())
    console.log(JSON.parse(localStorage.getItem('arrLocalArticles')!))
    console.log(JSON.parse(localStorage.getItem('writer_name')!))
  }

}
