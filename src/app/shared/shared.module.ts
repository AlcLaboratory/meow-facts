import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "./angular-material.module";
import { ButtonComponent } from "./components/button/button.component";

const components = [
  ButtonComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    AngularMaterialModule,
    ...components
  ],
})
export class SharedModule { }
