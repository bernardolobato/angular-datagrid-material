import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.scss']
})
export class TestViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  line;
  columns= [{
    id: "id",
    value: "No.",
    type:"text"
  }, {
    id: "name",
    value: "Name",
    type:"text"
  },
  {
    id: "weight",
    value: "Weight",
    type:"text"
  },
  {
    id: "symbol",
    value: "Symbol",
    type:"list",
    options: [
      {id: 1, value: "s1"},
      {id: 2, value: "s2"},
      {id: 3, value: "s3"},
      {id: 4, value: "s4"},
    ]
  },
  {
    id: "actions",
    value: "Operações",
    type:"actions",
    list: [
      {icon:"edit", name: "edit"},
      {icon:"delete", name: "delete"},
      {icon: "info", name: "info"}]
  }
  ];


  datasource=[
    { id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { id: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { id: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }
    ];
  action(e) {
    this.line= e;
    switch (e.event) {
      case 'edit':
        //do something
        break;
      case 'save':
        //do something
        break;
        case 'cancel':
          //do something
          break;
        case 'delete':
          //do something
          break;
    }
  }
  
}
