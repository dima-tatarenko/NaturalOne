import { Component, Input, inject, } from '@angular/core';
import { Router } from '@angular/router';
import { IArticle } from 'src/app/interfaces/iarticle';

@Component({
  selector: 'home-article-card',
  templateUrl: './home-article-card.component.html',
  styleUrls: ['./home-article-card.component.css']
})
export class HomeArticleCardComponent {

  router = inject(Router)

  @Input() article!: IArticle

  readOnClick(givenId: number) {
    this.router.navigate([`/article/${givenId}`])
  }

}
