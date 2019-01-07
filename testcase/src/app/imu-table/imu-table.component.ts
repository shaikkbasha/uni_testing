import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-imu-table',
  templateUrl: './imu-table.component.html',
  styleUrls: ['./imu-table.component.css']
})
export class ImuTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}

export interface PeriodicElement {
  name: any;
  position: any;
  weight: any;
  symbol: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '1', name: 'security', weight: 1.0079, symbol: 7000},
  {position: '2', name: 'pending', weight: 1.0079, symbol: 7000},
  {position: '2.1', name: 'pending', weight: 1.0079, symbol: 7000},
  {position: '3', name: 'others', weight: 1.0079, symbol: 7000},
  {position: '3.1', name: 'pending', weight: 1.0079, symbol: 7000}
];


