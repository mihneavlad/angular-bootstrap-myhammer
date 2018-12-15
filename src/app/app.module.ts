import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskDetailComponent } from "./task-detail/task-detail.component";

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TasksComponent,
    TaskDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
