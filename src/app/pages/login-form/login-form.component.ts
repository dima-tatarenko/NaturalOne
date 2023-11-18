import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  articleService = inject(ArticleService)

  newUserForm: FormGroup

  constructor() {
    this.newUserForm = new FormGroup({
      title: new FormControl(null, []),
      image: new FormControl(null, []),
      topic: new FormControl('topic', []),
      category: new FormControl('category', []),
      text: new FormControl(null, []),
    }
    )
  }

  onSubmit() {

    // this.formLogin.value.id = 'otra id';
    // const nuevoObj = { ...this.formLogin.value, id: 'otra id' };

    this.newUserForm.value.id = '20'


    console.log(this.newUserForm.value)
    this.articleService.addArticle(this.newUserForm.value)
    console.log(this.articleService.getAll())

  }

}
