import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { Wpng2RoutingModule } from './app-routing.module';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSingleComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Wpng2RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
