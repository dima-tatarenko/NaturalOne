import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';

type ErrorObj = { field: string, message: string }

@Component({
  selector: 'article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent {

  articleService = inject(ArticleService)

  errors: ErrorObj[] = []

  newArticleForm: FormGroup

  constructor() {
    this.newArticleForm = new FormGroup({
      title: new FormControl(null, []),
      image: new FormControl(null, []),
      topic: new FormControl(null, []),
      category: new FormControl(null, []),
      text: new FormControl(null, []),
    }
    )
  }

  onSubmit() {

    console.log(this.newArticleForm.value)
    this.articleService.addArticle(this.newArticleForm.value)
    console.log(this.articleService.getAll())

  }


}
