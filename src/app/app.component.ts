import { Component, VERSION } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

// formgroup is control complete form
// formcomtrol it handle single input field

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  loginUser() {
    console.log(this.loginForm.value);
  }
}
