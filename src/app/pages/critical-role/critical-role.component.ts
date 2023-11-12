import { Component, inject } from '@angular/core';
import { IArticle } from 'src/app/interfaces/iarticle';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'critical-role',
  templateUrl: './critical-role.component.html',
  styleUrls: ['./critical-role.component.css']
})
export class CriticalRoleComponent {

  articleService = inject(ArticleService)

  arrArticles: IArticle[] = []

  ngOnInit() {
    this.arrArticles = this.articleService.getByCategory('critical_role')
  }

}
