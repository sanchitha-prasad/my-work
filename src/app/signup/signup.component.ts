import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {ServiceService} from '../service/service.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import { interval } from 'rxjs/internal/observable/interval';
@Component(
    {selector: 'app-signup', templateUrl: './signup.component.html', styleUrls: ['./signup.component.css']}
)
export class SignupComponent implements OnInit {
    isSignedUp = false;
    isLoggedIn = false;
    isLoading = false;
    // tslint:disable-next-line:max-line-length
    constructor(public service : ServiceService, public firbase : AngularFireAuth,  private tostar: ToastrService, private router: Router) {}

    ngOnInit(): void {
        // tslint:disable-next-line:no-non-null-assertion
        if (localStorage.getItem('user')! ==null) {
            this.isSignedUp = true;
        } else {
            this.isSignedUp = false;
        }
    }

    // tslint:disable-next-line:typedef
    async signup(name : string, email : string, password : string, repassword: string, phone: number) {

      if (!name ){
        this.tostar.error('Please complete the Name ');
      }
      if (!password){
        this.tostar.error('Please complete the Password');
      }
      if (!email ){
        this.tostar.error('Please complete the Email');
      }
      if (!phone ){
        this.tostar.error('Please complete the Contact Number');
      }

      if (password !== repassword){
        this.tostar.error('No match password');
        document.getElementById('re').style.color = 'red';
      }

     else{
      document.getElementById('re').style.color = 'green';
      this.isLoading = true;


      setTimeout(() => {
          this.isLoading = false;
        }, 3000);






      await this
            .firbase
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                this.isLoggedIn = true;
                localStorage.setItem('user', JSON.stringify(res.user));

                const user = new FormData();
                user.append('access_key', '6808');
                user.append('firebase_id', 'AIzaSyARamLBiO0Y5IpNvp_Jv0qYkVCToioK88Q');
                user.append('user_signup', '1');
                user.append('name', name);
                user.append('email', email);
                user.append('profile', '');
                user.append('mobile', String(phone));
                user.append('type', 'email');
                user.append('fcm_id', res.user.uid);
                user.append('refer_code', '0');
                user.append('friends_code', '0');
                user.append('ip_address', '0');
                user.append('status', '1');
                this
                    .service
                    .signup(user)
                    .subscribe((event => {}), (err) => {


                    });

                this
                    .service
                    .signupOl(user)
                    .subscribe((event => {}), (err) => {


                    });

                this
                    .service
                    .signupSix(user)
                    .subscribe((event => {}), (err) => {


                    });

                this.tostar.success('Register Completed, Go back');
            }) .catch((error) => {

              const errorCode = error.code;
              const errorMessage = error.message;
              this
                  .tostar
                  .error(errorMessage);

          });
        }
    }
login(): void {
      this
          .router
          .navigate(['Examhub/Login']);
  }

}


