import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Router } from '@angular/router';

@Injectable()
export default class LoginService {
  connected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {

  }

  user = [
    {
      email: "test.test@test.fr",
      password: "azerty"
    }
  ]


  connect(event) {
    for (let index = 0; index < this.user.length; index++) {
      const element = this.user[index];
      if (element.email ===  event.email && element.password === event.password) {
        this.connected.next(true);
      this.router.navigate(["/home"]);
      } else {
        this.connected.next(false);
      }
      
    }
  }
}
