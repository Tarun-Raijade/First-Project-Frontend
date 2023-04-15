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

  constructor(
    private fb: FormBuilder,
    private signupService: SignupService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    var data = {
      username: this.signupForm.get('username').value,
      email: this.signupForm.get('email').value,
      password: this.signupForm.get('password').value
    }
    this.signupService.signupFormData(data).subscribe((response: any) => {
      console.log("data:", data)
      this.toastr.success('Successfully signed up ', 'My App');
    },
      (error) => {
        this.toastr.error('Error submitting signup form', 'My App');
        console.error("error:", error)

      }
    );
  }
}
