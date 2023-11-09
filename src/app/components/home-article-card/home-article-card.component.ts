import { Component, Input, } from '@angular/core';
import { IArticle } from 'src/app/interfaces/iarticle';

@Component({
  selector: 'home-article-card',
  templateUrl: './home-article-card.component.html',
  styleUrls: ['./home-article-card.component.css']
})
export class HomeArticleCardComponent {

  @Input() article!: IArticle

}
