import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoPageComponent } from './repo-page/repo-page.component';
import { RepoTableComponent } from './repo-table/repo-table.component';
import { EditIBMIComponent } from './edit-ibmi/edit-ibmi.component';


const routes: Routes = [{
	path: '',
	component: RepoPageComponent
},
{
	path: 'repo',
	component: RepoTableComponent
},
{
	path: 'editIBMI',
	component: EditIBMIComponent
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RepositoriesRoutingModule { }
