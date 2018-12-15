import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import { Task } from "./task";
import { TASKS } from "./mock-tasks";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }

  getTask(id: number): Observable<Task> {
    return of(TASKS.find(task => task.id === id));
  }
}
