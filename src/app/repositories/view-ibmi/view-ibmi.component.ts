import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { IBMIContact } from '../../IBMIContact';
import { AdministratorService } from '../../administrator.service';
import { Router } from '@angular/router';
import { TableModel, Table, TableItem, TableHeaderItem } from 'carbon-components-angular';

@Component({
	selector: 'app-view-ibmi',
	templateUrl: './view-ibmi.component.html',
	styleUrls: ['./view-ibmi.component.scss']
})
export class ViewIbmiComponent implements OnInit {
	headers: string[];
	contactsList: IBMIContact[] = [];
	data = [];
	model = new TableModel();
	skeletonModel = Table.skeletonModel(10, 5);
	skeleton = true;
	@Input() disabled = false;
	@Input() pageInputDisabled = false;
	@Input() pagesUnknown = false;

	@ViewChild('customTableItemTemplate', null)
	protected customTableItemTemplate: TemplateRef<any>;
	constructor(public administratorService: AdministratorService, private router: Router) { }

	ngOnInit() {
		// this.getContactsList();
		this.model.header = [
			new TableHeaderItem({data: 'Name'}),
			new TableHeaderItem({data: 'Email-Id'}),
			new TableHeaderItem({data: 'Phone'}),
			new TableHeaderItem({data: 'Fax Number'}),
			new TableHeaderItem({data: 'Country'})
		];
		this.model.pageLength = 10;

		this.administratorService.getIBMIContactsList().subscribe( (resp: any) => {
			this.contactsList = resp.body;
			this.data = [];
		this.model.data = this.data;
		// this.prepareData(this.contactsList);
		this.model.totalDataLength = 0;

		this.selectPage(1);
			console.log('inside contactsList function: ', this.contactsList , '/n contactslist.length', this.contactsList.length, '\n this.model.totalDatalength', this.model.totalDataLength);
		});

	}

	selectPage(page) {
		console.log('page: ', page);
		const offset = this.model.pageLength * (page - 1);
		console.log('offset: ', offset, 'this.model.pageLength:  ', this.model.pageLength);
		const pageRawData = this.data.slice(offset, offset + this.model.pageLength);
		console.log('pageRawData: ', pageRawData);
		this.model.data = this.prepareData(pageRawData);
		console.log('this.model.data inside selectPage: ', this.model.data);

		this.model.currentPage = page;
		console.log('this.model.currnetpage inside selectPage: ', this.model.currentPage);
	}

	prepareData(pagedata) {
		// console.log("inside prepare data: ",data);
		this.skeleton = false;
		const newData = [];
	for (const datum of pagedata) {
			console.log('inside for loop: ', datum, 'datum vlaues: ', datum.resource);
			// tslint:disable-next-line: max-line-length
			newData.push([new TableItem({ data: {name: datum.resource , resourceId: datum.resourceId, link: 'repos/editIBMI'}, template: this.customTableItemTemplate}),
			new TableItem({ data: datum.emailId}),
			new TableItem({ data: datum.phone }),
			new TableItem({ data: datum.faxNum }),
			new TableItem({ data: datum.countryName})]);
			// newData.push(datum);
			console.log('data.link: ', newData[0][0].data.name);
		}
		console.log('end of prepare data: ', newData);
		return newData;
	}
	// addContact(url: string) {
	//   console.log([url]);
	//   this.router.navigate([url]);
	// }

	gotoContactDetails(url: string, id: string) {
		console.log([url, id]);
		// this.IBMIid = id;
		// this.send.emit(this.IBMIid);
		this.router.navigate([url]);
	}
}
