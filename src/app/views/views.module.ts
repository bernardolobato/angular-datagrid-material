import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestViewComponent } from './test-view/test-view.component';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [TestViewComponent],
  imports: [
    CommonModule, UiModule
  ],
  exports: [TestViewComponent]
})
export class ViewsModule { }
