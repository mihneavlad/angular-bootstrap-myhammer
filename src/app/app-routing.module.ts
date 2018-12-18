import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TasksComponent } from "./tasks/tasks.component";
import { TaskDetailComponent } from "./task-detail/task-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "task/:id", component: TaskDetailComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
