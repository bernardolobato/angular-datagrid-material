import { Component, OnInit, ViewChild, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent {

  editing = false;

  @Input()
  dataSource;

  @Input()
  columns;
  textInput;
  displayedColumns;

  @Output()
  onAction = new EventEmitter();
  
  constructor(){

  }


  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['columns'].currentValue);
    if (changes['columns'].currentValue) {
      this.displayedColumns =  changes['columns'].currentValue.map(x => x.id);
    }
  }

  createTable() {
    let tableArr: Element[] = [
    { id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { id: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { id: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }
    ];
    this.dataSource = tableArr;
  }

  addNewLine() {
    if (!this.editing) {
      this.dataSource.unshift({ id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', editing: true, isNew: true })
      this.editing = true;
    }
  }
  actionButton(action, i){
    switch (action) {
      case 'edit':
        if (!this.editing) {
          this.dataSource[i].editing=true;
          this.editing = true;
        }
        break;
      case 'save':
        this.dataSource[i].editing=false;
        this.editing = false;
        break;
        case 'cancel':
          this.dataSource[i].editing=false;
          this.editing = false;
          break;
        case 'delete':
          this.dataSource[i].editing=false;
          this.editing = false;
          break;
    }
    this.onAction.emit({event: action, data: this.dataSource[i]});
  
  }
}


export interface Element {
  id: number,
  name: string,
  weight: number,
  symbol: string
}
