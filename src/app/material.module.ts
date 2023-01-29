import { NgModule } from "@angular/core";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { MatDividerModule } from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";

const modules: any[] = [
  MatButtonModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatToolbarModule,
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
