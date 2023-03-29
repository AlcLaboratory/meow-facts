import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from "./angular-material.module";
import { ButtonComponent } from "./components/button/button.component";
import { CardComponent } from "./components/card/card.component";
import { InputComponent } from "./components/input/input.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const components = [
  ButtonComponent,
  InputComponent,
  CardComponent,
  SpinnerComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  exports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    ...components
  ],
})
export class SharedModule { }
