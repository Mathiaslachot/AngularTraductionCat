import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import CatTranslator from "../lib/translator.js";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "AngulatCat";
  messageArray: any = [
    CatTranslator.translateText("Hi,beautiful cat.How are you?")
  ];
  testObject: any = {};
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      message: ["", Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    const messageString = this.registerForm.value.message.toString();

    this.messageArray.push(CatTranslator.translateText(messageString));

    this.registerForm.reset();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
