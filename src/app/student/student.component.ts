import { Component, Input, OnInit } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";
@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"],
})
export class StudentComponent implements OnInit {
  constructor() {
    console.log(this.myInputMsg);
  }

  @Input() myInputMsg: string = "";
  @Input() getPrice: Number | undefined;
  @Input() myStudents: string[] | undefined;
  ngOnInit(): void {
    console.log(this.myInputMsg);
  }
  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string): void {
    this.newItemEvent.emit(value);
  }
}
