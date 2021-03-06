import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Task } from "./task";
import tasks from "../assets/data/tasks.json";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    console.log(tasks.body);

    let activeTasks = tasks.body.filter(task => task.state === "active");

    console.log(activeTasks);

    return { tasks: activeTasks };
  }
}
