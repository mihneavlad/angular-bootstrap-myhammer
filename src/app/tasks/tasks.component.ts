import { TASKS } from "../mock-tasks";
import { Component, OnInit } from "@angular/core";
import { Task } from "../task";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  selectedTask: Task;
  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  tasks = TASKS;

  task: Task = {
    id: 1,
    title: "Dach"
  };

  constructor() {}

  ngOnInit() {}
}
