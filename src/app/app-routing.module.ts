import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticleFormComponent } from './pages/article-form/article-form.component';
import { DndComponent } from './pages/dnd/dnd.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomePageComponent },
  { path: 'post', component: ArticleFormComponent },
  { path: 'dnd', component: DndComponent },
  { path: 'article/:articleId', component: ArticlePageComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
