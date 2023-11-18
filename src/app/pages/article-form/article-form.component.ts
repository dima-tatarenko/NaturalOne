import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
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

  arrCategories = {}

  constructor() {
    this.newArticleForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required
      ]),
      image: new FormControl(null, [
        Validators.required
      ]),
      topic: new FormControl('topic', [
        this.topicValidator
      ]),
      category: new FormControl('category', [
        this.categoryValidator
      ]),
      text: new FormControl(null, [
        Validators.required
      ]),
    }
    )
  }

  onSubmit() {

    // this.formLogin.value.id = 'otra id';

    this.newArticleForm.value.id = (this.articleService.countId()) + 1

    if (!this.newArticleForm.valid) return

    console.log(this.newArticleForm.value)
    this.articleService.addArticle(this.newArticleForm.value)
    console.log(this.articleService.getAll())


    localStorage.setItem('arrLocalArticles', JSON.stringify(this.articleService.getAll()))

    // let newArray = JSON.parse(localStorage.getItem('arrLocalArticles')!)
  }

  checkError(controlName: string, errorName: string) {
    return this.newArticleForm.get(controlName)?.hasError(errorName) && this.newArticleForm.get(controlName)?.touched
  }

  categoryValidator(control: AbstractControl) {
    const value = control.value.toLowerCase()
    if (value === "category") {
      return { categoryvalidator: true }
    } else {
      return null
    }
  }

  topicValidator(control: AbstractControl) {
    const value = control.value.toLowerCase()
    if (value === "topic") {
      return { topicvalidator: true }
    } else {
      return null
    }
  }


}
