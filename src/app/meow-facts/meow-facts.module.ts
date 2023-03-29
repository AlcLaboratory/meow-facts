import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeowFactsComponent } from './components/meow-facts/meow-facts.component';
import { MeowFactListComponent } from './components/meow-fact-list/meow-fact-list.component';
import { MeowFactItemComponent } from './components/meow-fact-item/meow-fact-item.component';
import { MeowFactsRoutingModule } from './meow-facts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MeowFactTitlePipe } from './components/meow-fact-item/meow-fact-title.pipe';

@NgModule({
  declarations: [
    MeowFactsComponent,
    MeowFactListComponent,
    MeowFactItemComponent,
    MeowFactTitlePipe
  ],
  imports: [
    CommonModule,
    MeowFactsRoutingModule,
    SharedModule
  ],
  providers: [
    MeowFactTitlePipe
  ]
})
export class MeowFactsModule { }
