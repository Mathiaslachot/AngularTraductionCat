import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MessageComponent } from "./message/message.component";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import LoginService from "src/app/services/LoginService";

@NgModule({
  declarations: [AppComponent, MessageComponent, LoginComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
