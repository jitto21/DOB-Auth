import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-dob',
  templateUrl: './dob.component.html',
  styleUrls: ['./dob.component.scss']
})
export class DobComponent implements OnInit {

  private days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  public states: string[] = ["Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry"];
  dobForm: FormGroup;
  public isLength10: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.dobForm = new FormGroup({
      'state': new FormControl(null, [ Validators.required]),
      'dob': new FormControl(null, 
        [ 
          Validators.required, 
          Validators.pattern('[0-9/]+'),
          Validators.maxLength(10),
          Validators.minLength(10),
          this.dobValidator.bind(this)
        ])
    })
  }

  onSubmit() {
    console.log(this.dobForm.value);
  }

  dobValidator(control: FormControl): null | {[key: string]: boolean} {
    const dob = control.value ? control.value : '';
    if(dob && dob.length == 10) {
      this.isLength10 = true;
      const dobArr: string[] = dob.split('/'); 

      /*  dobArr[0] ==> month
          dobArr[1] ==> day
          dobArr[2] ==> year
      */
      console.log(new Date().getTime() <= new Date([...dobArr].reverse().join('-')).getTime());
      console.log(+dobArr[0] > 12);
      console.log(+dobArr[1] > this.days[ +(dobArr[0]) - 1 ]);
      console.log(dobArr);
      // console.log(new Date().getTime() <= new Date(dobArr.reverse().join('-')).getTime());
      const isLeap = +dobArr[2]%100===0 ? +dobArr[2]%400===0 : +dobArr[2]%4===0; // leap year check
      this.days[1] = isLeap ? 29 : 28; // if (leap year) ==> make days of Feb as '29'
      if(+dobArr[0] > 12 || +dobArr[1] > this.days[ +(dobArr[0]) - 1 ] ||
        new Date().getTime() <= new Date([...dobArr].reverse().join('-')).getTime()) {
        console.log("Invalid date");
        return {'dobIncorrect': true};
      }
    }
    return null; 
  }

}
