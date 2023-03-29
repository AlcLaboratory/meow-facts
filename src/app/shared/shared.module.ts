import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from "./angular-material.module";
import { ButtonComponent } from "./components/button/button.component";
import { CardComponent } from "./components/card/card.component";
import { InputComponent } from "./components/input/input.component";

const components = [
  ButtonComponent,
  InputComponent,
  CardComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    AngularMaterialModule,
    ...components,
    ReactiveFormsModule
  ],
})
export class SharedModule { }
