import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from './signup.service';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  /** Usubscription subject */

  unsubscribe$ = new Subject<boolean>();
  signupForm: FormGroup;
  loggedIn: boolean = false;
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private signupService: SignupService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signUp() {
    var data = {
      firstName: this.signupForm.get('firstName').value,
      lastName: this.signupForm.get('lastName').value,
      username: this.signupForm.get('userName').value,
      email: this.signupForm.get('email').value,
      password: this.signupForm.get('password').value
    }
    this.signupService.signupFormData(data).subscribe((response: any) => {
      this.toastr.success('Signed up successfully.', 'My App');
      this.loggedIn = true;
    },
      (error) => {
        this.toastr.error('Error in signing up.', 'My App');
        console.error("error:", error)

      }
    );
  }

  login() {
    var data = {
      username: this.signupForm.get('username').value,
      password: this.signupForm.get('password').value
    }
  }
}
