import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TasksComponent } from "./tasks/tasks.component";
import { MainComponent } from "./main/main.component";
import { TaskDetailComponent } from "./task-detail/task-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "/main", pathMatch: "full" },
  { path: "main", component: MainComponent },
  { path: "task/:id", component: TaskDetailComponent },
  { path: "tasks", component: TasksComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
