import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeowFactsComponent } from './components/meow-facts/meow-facts.component';
import { MeowFactListComponent } from './components/meow-fact-list/meow-fact-list.component';
import { MeowFactItemComponent } from './components/meow-fact-item/meow-fact-item.component';

@NgModule({
  declarations: [
    MeowFactsComponent,
    MeowFactListComponent,
    MeowFactItemComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MeowFactsModule { }
