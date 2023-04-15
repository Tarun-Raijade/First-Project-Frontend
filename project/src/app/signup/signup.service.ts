import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environment';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  serverBaseUrl = environment.serverBaseURL;

  constructor(private http: HttpClient) { }

  signupFormData(credentials: any): Observable<any> {
    return this.http.post(`${this.serverBaseUrl}/api/signup`, credentials, { responseType: 'text' })
  }
}
