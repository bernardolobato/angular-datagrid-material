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
    if (changes['columns'].currentValue) {
      this.displayedColumns =  changes['columns'].currentValue.map(x => x.id);
    }
  }

  addNewLine() {
    if (!this.editing) {
//{ id: '', name: '', weight: '', symbol: '', editing: true, isNew: true }
      let ret = {};
      let emplyLine = this.columns.map(x => {
        console.log(x)
        ret[x.id] = '';
        return ret
      })[0];
      emplyLine.editing = true;
      emplyLine.isNew = true;
      console.log(emplyLine);
      this.dataSource.unshift(emplyLine);
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
