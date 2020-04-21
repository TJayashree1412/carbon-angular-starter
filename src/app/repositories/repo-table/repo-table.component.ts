import { Component, OnInit, Input } from '@angular/core';

import {
  Table,
	TableModel,
	TableItem,
	TableHeaderItem,
  PaginationModel,
  Pagination,
  I18n,
  ExperimentalService
} from 'carbon-components-angular';

@Component({
	selector: 'app-repo-table',
	templateUrl: './repo-table.component.html',
	styleUrls: ['./repo-table.component.scss']
})
export class RepoTableComponent implements OnInit {
	model = new TableModel();
  data = [];
  skeletonModel = Table.skeletonModel(10, 6);
  skeleton = true;
  pagination = new Pagination(new I18n(), new ExperimentalService());
  // @Input() pageModel = new PaginationModel();
	@Input() disabled = false;
	@Input() pageInputDisabled = false;
  @Input() pagesUnknown = false;
  
  // @Input() itemsPerPage: number=5;
	constructor() { }

	ngOnInit() {
    this.data = [
      [
        new TableItem({data: 'Repo 1', expandedData: 'Row description'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: '123'}),
        new TableItem({data: '456'}),
        new TableItem({data: 'Links'})
      ],
      [
        new TableItem({data: 'Repo 2', expandedData: 'Row description'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: '123'}),
        new TableItem({data: '456'}),
        new TableItem({data: 'Links'})
      ],
      [
        new TableItem({data: 'Repo 3', expandedData: 'Row description'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: '123'}),
        new TableItem({data: '456'}),
        new TableItem({data: 'Links'})
      ],
      [
        new TableItem({data: 'Repo 4', expandedData: 'Row description'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: '123'}),
        new TableItem({data: '456'}),
        new TableItem({data: 'Links'})
      ],
      [
        new TableItem({data: 'Repo 5', expandedData: 'Row description'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: '123'}),
        new TableItem({data: '456'}),
        new TableItem({data: 'Links'})
      ],
      [
        new TableItem({data: 'Repo 6', expandedData: 'Row description'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: '123'}),
        new TableItem({data: '456'}),
        new TableItem({data: 'Links'})
      ],
      [
        new TableItem({data: 'Repo 7', expandedData: 'Row description'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: '123'}),
        new TableItem({data: '456'}),
        new TableItem({data: 'Links'})
      ],
      [
        new TableItem({data: 'Repo 8', expandedData: 'Row description'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: '123'}),
        new TableItem({data: '456'}),
        new TableItem({data: 'Links'})
      ],
      [
        new TableItem({data: 'Repo 9', expandedData: 'Row description'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: '123'}),
        new TableItem({data: '456'}),
        new TableItem({data: 'Links'})
      ],
      [
        new TableItem({data: 'Repo 10', expandedData: 'Row description'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: '123'}),
        new TableItem({data: '456'}),
        new TableItem({data: 'Links'})
      ],
      [
        new TableItem({data: 'Repo 11', expandedData: 'Row description'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: '123'}),
        new TableItem({data: '456'}),
        new TableItem({data: 'Links'})
      ],
      [
        new TableItem({data: 'Repo 12', expandedData: 'Row description'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: '123'}),
        new TableItem({data: '456'}),
        new TableItem({data: 'Links'})
      ],
      [
        new TableItem({data: 'Repo 13', expandedData: 'Row description'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: '123'}),
        new TableItem({data: '456'}),
        new TableItem({data: 'Links'})
      ],
      [
        new TableItem({data: 'Repo 14', expandedData: 'Row description'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: '123'}),
        new TableItem({data: '456'}),
        new TableItem({data: 'Links'})
      ],
      [
        new TableItem({data: 'Repo 15', expandedData: 'Row description'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: '123'}),
        new TableItem({data: '456'}),
        new TableItem({data: 'Links'})
      ],
      [
        new TableItem({data: 'Repo 16', expandedData: 'Row description'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: 'Date'}),
        new TableItem({data: '123'}),
        new TableItem({data: '456'}),
        new TableItem({data: 'Links'})
      ]
    ];
    this.model.header = [
      new TableHeaderItem({data: 'Name'}),
      new TableHeaderItem({data: 'Created'}),
      new TableHeaderItem({data: 'Updated'}),
      new TableHeaderItem({data: 'Open Issues'}),
      new TableHeaderItem({data: 'Stars'}),
      new TableHeaderItem({data: 'Links'})
    ];
    this.model.pageLength = 5;
    // this.pagination.itemsPerPage = this.itemsPerPage;
    // this.pagination.model=this.model;
    this.model.data = this.data;
    console.log("this.model : /n",this.model,"this.model.data: ",this.model.data);
    console.log("this.pagination : /n",this.pagination);
    this.model.totalDataLength = this.model.data.length;
    this.selectPage(1);
	}

selectPage(page) {
  const offset = this.model.pageLength * (page - 1);
  console.log("offset: ",offset,"this.model.pageLength:  ",this.model.pageLength);
  const pageRawData = this.data.slice(offset, offset + this.model.pageLength);
  this.model.data = this.prepareData(pageRawData);
  this.model.currentPage = page;
}

prepareData(data) {
  this.skeleton = false;
  const newData = [];
  for (const datum of data) {
    newData.push(datum);
  }
  return newData;
}
}