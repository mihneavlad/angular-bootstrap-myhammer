import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { UiModule } from "./ui/ui.module";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskDetailComponent } from "./task-detail/task-detail.component";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, TasksComponent, TaskDetailComponent],
  imports: [BrowserModule, UiModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
