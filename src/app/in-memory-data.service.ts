import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Task } from "./task";
import jobs from "../assets/data/jobs.json";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = async () => {
      const response = await fetch("../assets/data/jobs.json");
      const json = await response.json();
      console.log(json);
      console.log(json.body);
    };

    tasks();

    // return { tasks };
  }

  // genId(tasks: Task[]): number {
  //   return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 0;
  // }
}
