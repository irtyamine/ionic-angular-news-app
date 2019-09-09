// module required so item-list component can be used by more than one page
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular';
import { ArticleListComponent } from './article-list/article-list.component';
import { PipesModule } from '../pipes/pipes.module';
import { PageRefreshComponent } from './page-refresh/page-refresh.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
	declarations: [ArticleListComponent, PageRefreshComponent, ProgressBarComponent],
	imports: [
		CommonModule,
		IonicModule,
		PipesModule
	],
	exports: [
		ArticleListComponent,
		PageRefreshComponent,
		ProgressBarComponent
	]
})

export class ComponentsModule {}
