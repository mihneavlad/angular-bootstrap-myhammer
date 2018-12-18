import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";

import { switchMap } from "rxjs/operators";

import { Task } from "../task";
import { TaskService } from "../task.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-task-detail",
  templateUrl: "./task-detail.component.html",
  styleUrls: ["./task-detail.component.css"]
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.taskService.getTask(+params.get("id"))
        )
      )
      .subscribe(task => (this.task = task));
  }
}
