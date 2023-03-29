import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeowFactsComponent } from './components/meow-facts/meow-facts.component';

const routes: Routes = [
  { path: '', component: MeowFactsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeowFactsRoutingModule {}
