import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Task } from "./task";
import jobs from "../assets/data/jobs.json";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // const tasks = [
    //   { id: 11, title: "Mr. Nice" },
    //   { id: 12, title: "Narco" },
    //   { id: 13, title: "Bombasto" },
    //   { id: 14, title: "Celeritas" },
    //   { id: 15, title: "Magneta" },
    //   { id: 16, title: "RubberMan" },
    //   { id: 17, title: "Dynama" },
    //   { id: 18, title: "Dr IQ" },
    //   { id: 19, title: "Magma" },
    //   { id: 20, title: "Tornado" }
    // ];
    // console.log(tasks);
    // return { tasks };

    const access = async () => {
      const response = await fetch("../assets/data/jobs.json");
      const tasks = await response.json();

      console.log(tasks);
      console.log(tasks.body);
      console.log(typeof tasks.body[0].id);
      console.log(tasks.body.map(item => item.state === "active"));
    };

    access();

    // const tasks = access();
    // return { tasks };
  }

  // genId(tasks: Task[]): number {
  //   return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 0;
  // }
}
