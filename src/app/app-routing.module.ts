import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TasksComponent } from "./tasks/tasks.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  { path: "", redirectTo: "/main", pathMatch: "full" },
  { path: "main", component: MainComponent },
  { path: "tasks", component: TasksComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
