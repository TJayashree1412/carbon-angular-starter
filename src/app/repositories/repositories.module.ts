import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoriesRoutingModule } from './repositories-routing.module';
import { RepoPageComponent } from './repo-page/repo-page.component';
import { GridModule, TableModule, DocumentationModule } from 'carbon-components-angular';
import { RepoTableComponent } from './repo-table/repo-table.component';
import { LinkModule, PaginationModule } from "carbon-components-angular";
import { ViewIbmiComponent } from './view-ibmi/view-ibmi.component';

@NgModule({
	declarations: [RepoPageComponent, RepoTableComponent, ViewIbmiComponent],
	imports: [
		CommonModule,
		RepositoriesRoutingModule,
		GridModule,
		 TableModule,
		 LinkModule,
		 PaginationModule,
		 LinkModule,
		 DocumentationModule
	]
})
export class RepositoriesModule { }
