import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from 'src/app/interfaces/iarticle';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent {

  articleService = inject(ArticleService)
  activatedRoute = inject(ActivatedRoute)

  article!: IArticle | undefined

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.article = this.articleService.getArticle(parseInt(params['articleId']))
    })


    // this.activatedRoute.params.subscribe(params => {
    //   this.post = this.postsService.getById(parseInt(params['NOMBRE RUTA']))
    // })
  }

}
