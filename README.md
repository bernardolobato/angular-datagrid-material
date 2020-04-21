# HelpperDatagrid

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Using datagrid-component
* Import UiModule from your module
```@NgModule({
  declarations: [TestViewComponent],
  imports: [
    CommonModule, UiModule
  ],
  exports: [TestViewComponent]
})
export class ViewsModule { }
```

* Use ```app-data-grid``` in your view
```<div>
  <h1>Datagrid</h1>
  <pre>
    {{line |json}}
  </pre>
  <app-data-grid [columns]="columns" [dataSource]="datasource" (onAction)="action($event)"></app-data-grid>
</div>
```

There are two mandatories parameters: columns and datasources.
* Columns represents the columns of the datatable. This object must be in the following example:
```columns= [{
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
  ```

  * datasource represents the data that will fill the datatable. Must be in the following format:
   ```datasource=[
    { id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { id: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { id: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }
    ];
```
### Notes
* The id property in column must match the name of the property um datasource. For example, in second element in columns list, we have id:name. This column will match with name property in datasource.
* The icon list in actions inside columns list must match material icons names to render properly
* The option ```(onAction)="action($event)"``` in use inside the component is an event that will be triggered when any actions ocours. You must implement this method and choose what will happen when the specified action is triggered
