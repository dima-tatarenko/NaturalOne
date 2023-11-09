import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FullArticleCardComponent } from './components/full-article-card/full-article-card.component';
import { HomeArticleCardComponent } from './components/home-article-card/home-article-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomePageComponent,
    FullArticleCardComponent,
    HomeArticleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
