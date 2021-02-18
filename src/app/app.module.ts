import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { RsPaginationModule } from '@cell4rom/front-line';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";


@NgModule({
  imports: [
     BrowserModule,
     FormsModule, 
     RsPaginationModule,
     HttpClientModule,
     RouterModule.forRoot([])
    ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
