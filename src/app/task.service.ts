import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import { Task } from "./task";
// import { TASKS } from "./mock-tasks";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  constructor(private http: HttpClient) {}

  private tasksUrl = "api/tasks";

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.tasksUrl}/${id}`);
  }
}
