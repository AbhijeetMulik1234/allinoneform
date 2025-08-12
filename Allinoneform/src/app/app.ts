import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Allinoneform');
  Registrationform!: FormGroup;
  Gender = ['Male', 'Female'];
  Employementtype = ['Full time', 'Part time', 'Contract'];
  Preferlocation = ['Remote', 'On-site', 'Hybrid'];

  constructor(private fb: FormBuilder) {
    this.Registrationform = this.fb.group({
      fname: ['', Validators.required, Validators.minLength(3)],
      lname: ['', Validators.required, Validators.maxLength(8)],
      email: ['', Validators.required, Validators.email],
      dateofbirth: ['', Validators.required],
      gender: ['', Validators.required],
      mymobilenumber: this.fb.array([this.newMobileNumber()]),
      // adress: this.fb.group({
      //   street: ['', Validators.required],
      //   city: ['', Validators.required],
      //   state: ['', Validators.required],
      //   zipcode: ['', Validators.required],
      // }),
      // workexperience: this.fb.array(['']),
      // skills: this.fb.array([this.newSkill()]),

      // employementtype: ['', Validators.required],
      // relocate: [false],
      // preferedlocation: ['', Validators.required],
    });
  }
  //_______________________MobileNumberField_______________________________________________//
  //get method for mobilenumber
  get mobileNumbersArray(): FormArray {
    return this.Registrationform.get('mymobilenumber') as FormArray;
  }

  // // Create a new mobile number FormGroup
  newMobileNumber(): FormGroup {
    return this.fb.group({
      number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }

  // // Add a new mobile number field
  addMobileNumber() {
    this.mobileNumbersArray.push(this.newMobileNumber());
  }

  // // Remove a mobile number field by index
  removeMobileNumber(index: number) {
    this.mobileNumbersArray.removeAt(index);
  }
  //_______________________Workexperiencefield_______________________________________________//
  // get WorkExperienceArray(): FormArray {
  //   return this.Registrationform.get('workexperience') as FormArray;
  // }

  // // Create a new skill FormGroup
  // newSWorkexperience(): FormGroup {
  //   return this.fb.group({
  //     Companyname: ['', Validators.required],
  //     position:['',Validators.required],
  //     years:['',Validators.min(0)]
  //   });
  // }

  // // Add a skill to the FormArray
  // addWorkexperience() {
  //   this.WorkExperienceArray.push(this.newSWorkexperience());
  // }

  // Remove a skill at a given index
  // removeWorkexperience(index: number) {
  //   this.WorkExperienceArray.removeAt(index);
  // }

  //_______________________SkillsField_______________________________________________//
  // Getter for skills FormArray
  // get skillsArray(): FormArray {
  //   return this.Registrationform.get('skills') as FormArray;
  // }

  // // Create a new skill FormGroup
  // newSkill(): FormGroup {
  //   return this.fb.group({
  //     skillName: ['', Validators.required],
  //   });
  // }

  // // Add a skill to the FormArray
  // addSkill() {
  //   this.skillsArray.push(this.newSkill());
  // }

  // // Remove a skill at a given index
  // removeSkill(index: number) {
  //   this.skillsArray.removeAt(index);
  // }
  OnSubmit() {
    if (this.Registrationform.valid) {
      console.log('Form Submitted', this.Registrationform.value);
      alert('form is proper');
    } else {
      alert('error is occuring');
    }
  }
}
