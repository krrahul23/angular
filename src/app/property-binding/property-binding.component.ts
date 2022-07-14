import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-property-binding",
  templateUrl: "./property-binding.component.html",
  styleUrls: ["./property-binding.component.css"],
})
export class PropertyBindingComponent implements OnInit {
  constructor() {}
  public name: string = "Rahul";
  public profession: string = "SoftWare Engineer";
  public user = { name: "Rahul", email: "raulk023@gmail.com" };
  public clickcount = 0;
  public showAlert(): void {
    console.log("You clicked on the button...");
    alert("Click Event Fired...");
  }
  public showCount(): void {
    this.clickcount++;
    alert(this.clickcount);
  }
  ngOnInit(): void {}
}
