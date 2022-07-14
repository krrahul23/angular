import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PropertyBindingComponent } from "./property-binding/property-binding.component";
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [AppComponent, PropertyBindingComponent, StudentComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
