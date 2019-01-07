import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { IfcaFinalDataSource } from './ifca-final-datasource';

@Component({
  selector: 'app-ifca-final',
  templateUrl: './ifca-final.component.html',
  styleUrls: ['./ifca-final.component.css'],
})
export class IfcaFinalComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: IfcaFinalDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new IfcaFinalDataSource(this.paginator, this.sort);
  }
}
