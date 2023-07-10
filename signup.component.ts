import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  
    constructor(private formBuilder: FormBuilder, private authService: AuthService) {
      this.signupForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
  
    signup() {
      if (this.signupForm.valid) {
        const username = this.signupForm.value.username;
        const password = this.signupForm.value.password;
        this.authService.signup(username, password).subscribe(
          _response => {
            // Handle successful signup
          },
          _error => {
            // Handle signup error
          }
        );
      }
    }
  }
  
}

  
    