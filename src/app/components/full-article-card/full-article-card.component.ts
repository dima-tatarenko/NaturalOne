import { Component, Input } from '@angular/core';
import { IArticle } from 'src/app/interfaces/iarticle';

@Component({
  selector: 'full-article-card',
  templateUrl: './full-article-card.component.html',
  styleUrls: ['./full-article-card.component.css']
})
export class FullArticleCardComponent {

  @Input() article!: IArticle | undefined

}
