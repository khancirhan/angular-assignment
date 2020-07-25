import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { TrendingComponent } from './components/trending/trending.component';
import { PostsComponent } from './components/posts/posts.component';
import { ActionsComponent } from './components/actions/actions.component';
import { FollowersComponent } from './components/followers/followers.component';
import { PremiumComponent } from './components/premium/premium.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    AboutComponent,
    TrendingComponent,
    PostsComponent,
    ActionsComponent,
    FollowersComponent,
    PremiumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
