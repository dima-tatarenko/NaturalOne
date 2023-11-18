import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticleFormComponent } from './pages/article-form/article-form.component';
import { DndComponent } from './pages/dnd/dnd.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { PathfinderComponent } from './pages/pathfinder/pathfinder.component';
import { CriticalRoleComponent } from './pages/critical-role/critical-role.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { RegistrationFormComponent } from './pages/registration-form/registration-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomePageComponent },
  { path: 'post', component: ArticleFormComponent },
  { path: 'dnd', component: DndComponent },
  { path: 'pathfinder', component: PathfinderComponent },
  { path: 'critical_role', component: CriticalRoleComponent },
  { path: 'article/:articleId', component: ArticlePageComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'sign_up', component: RegistrationFormComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
