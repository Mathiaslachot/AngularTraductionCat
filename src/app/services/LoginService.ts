import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Router } from '@angular/router';

@Injectable()
export default class LoginService {
  connected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {

  }


  connect(event) {
   console.log({connected: this.connected.getValue()});
   console.log({event: event});
   
    if (event) {
      this.connected.next(true);
      this.router.navigate(["/home"]);
    } else {
      this.connected.next(false);
    }
    console.log({connected: this.connected.getValue()});
  }
}
