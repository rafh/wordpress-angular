import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';

const routes: Routes = [
	{
		path: '',
		component: MainPageComponent,
		pathMatch: 'full'
	},
	{
		path: 'posts',
		component: PostListComponent,
	},
	{
		path: ':slug',
		component: PostSingleComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class Wpng2RoutingModule { }
