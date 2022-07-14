import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "BindingAngularDemo";

  myInput: string = "I am coming from parent component";
  price: number = 12.5;
  students: Array<string> = ["Bill", "Nill", "Mill"];
  items = ["items1", "items2", "items3"];
  addItem(newItem: string) {
    this.items.push(newItem);
    // console.log(this.items);
  }
}
