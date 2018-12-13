import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Task } from "./task";
import { TASKS } from "./mock-tasks";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }

  constructor() {}
}