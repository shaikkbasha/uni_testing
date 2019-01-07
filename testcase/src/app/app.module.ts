import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { IfcaFinalComponent } from './ifca-final/ifca-final.component';
import { ImuTableComponent } from './imu-table/imu-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    IfcaFinalComponent,
    ImuTableComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,MatCheckboxModule,
    MatSortModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
