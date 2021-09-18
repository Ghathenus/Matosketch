import { PersonnelForRegistrationDto } from './../../_interfaces/user/personnelForAdditionDto.model';
import { UserForRegistrationDto } from './../../_interfaces/user/userForRegistrationDto.model';
import { AuthenticationService } from './../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordConfirmationValidatorService } from 'src/app/shared/custom-validators/password-confirmation-validator.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-personnel',
  templateUrl: './register-personnel.component.html',
  styleUrls: ['./register-personnel.component.scss']
})
export class RegisterPersonnelComponent implements OnInit {

  public registerForm: FormGroup;
  public errorMessage: string = '';
  public showError: boolean;
  private _returnUrl: string;
  selectedCategory: string = 'Translator';

  // tslint:disable-next-line: max-line-length
  constructor(private _authService: AuthenticationService, private _passConfValidator: PasswordConfirmationValidatorService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/auth/login';
    this.registerForm = new FormGroup({
      FirstName: new FormControl(''),
      LastName: new FormControl(''),

      address : new FormControl(''),
      description : new FormControl(''),
      Age : new FormControl(''),

      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('')
    });
    this.registerForm.get('confirm').setValidators([Validators.required,
      this._passConfValidator.validateConfirmPassword(this.registerForm.get('password'))]);
  }


  public validateControl = (controlName: string) => {
    return this.registerForm.controls[controlName].invalid && this.registerForm.controls[controlName].touched
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName)
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedCategory = event.target.value;
  }
  public registerUser= (registerFormValue) => {
    this.showError = false;
    const formValues = { ...registerFormValue };

    const user: UserForRegistrationDto = {
      FirstName : formValues.FirstName,

      LastName : formValues.LastName,

     Age : formValues.Age,
     Address: formValues.address,
     Description: formValues.description,
      Email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.confirm,
      UName : formValues.FirstName + formValues.LastName
    };

    this._authService.registerUser("api/accounts/UserRegistration", user)
    .subscribe(_ => {
      console.log("Successful registration");
      console.log(user);
      this._router.navigate([this._returnUrl]);
    },
    error => {
      this.errorMessage = error;
      this.showError = true;
    })
  }
}


