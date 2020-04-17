import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './data-grid/data-grid.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table'  
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';




@NgModule({
  declarations: [DataGridComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    DataGridComponent
  ]
})
export class UiModule { }
