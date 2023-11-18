import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FullArticleCardComponent } from './components/full-article-card/full-article-card.component';
import { HomeArticleCardComponent } from './components/home-article-card/home-article-card.component';
import { EditorNavComponent } from './components/editor-nav/editor-nav.component';
import { ArticleFormComponent } from './pages/article-form/article-form.component';
import { DndComponent } from './pages/dnd/dnd.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { PathfinderComponent } from './pages/pathfinder/pathfinder.component';
import { CriticalRoleComponent } from './pages/critical-role/critical-role.component';
import { RegistrationFormComponent } from './pages/registration-form/registration-form.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomePageComponent,
    FullArticleCardComponent,
    HomeArticleCardComponent,
    EditorNavComponent,
    ArticleFormComponent,
    DndComponent,
    ArticlePageComponent,
    PathfinderComponent,
    CriticalRoleComponent,
    RegistrationFormComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
