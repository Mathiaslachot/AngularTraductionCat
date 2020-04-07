import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import CatTranslator from "../../lib/translator.js";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  title = "AngulatCat";
  messageArray: any = [
    CatTranslator.translateText("Hi,beautiful cat.How are you?")
  ];

  traductionForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.traductionForm = this.formBuilder.group({
      message: ["", Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    const messageString = this.traductionForm.value.message.toString();

    this.messageArray.push(CatTranslator.translateText(messageString));

    this.traductionForm.reset();
  }

  onReset() {
    this.submitted = false;
    this.traductionForm.reset();
  }
}
