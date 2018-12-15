import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import { Task } from "./task";
import { TASKS } from "./mock-tasks";

import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  constructor(private http: HttpClient) {}

  private tasksUrl = "api/tasks"; // URL to web api

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  getTask(id: number): Observable<Task> {
    return of(TASKS.find(task => task.id === id));
  }
}
