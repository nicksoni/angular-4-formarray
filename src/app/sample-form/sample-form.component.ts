import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {
  sampleForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.sampleForm = this.formBuilder.group({
      formArrayList: this.formBuilder.array([this.hsnRows()]),
      hsnGrandTotal: [0]
    });
  }

  hsnRows() {
    return this.formBuilder.group({
      desc: this.formBuilder.control(null),
      // goodservice: this.formBuilder.control("SELECT"),
      hsn_sc: this.formBuilder.control(0),
      qty: this.formBuilder.control(0),
      uqc: this.formBuilder.control("SELECT"),
      val: this.formBuilder.control(0),
      txval: this.formBuilder.control(0),
      rt: this.formBuilder.control(0),
      camt: this.formBuilder.control(0),
      samt: this.formBuilder.control(0),
      iamt: this.formBuilder.control(0),
      rtCess: this.formBuilder.control(0),
      csamt: this.formBuilder.control(0),
      itemTotal: this.formBuilder.control(0)
    });
  }

  get SampleFormControls() {
    return <FormArray>this.sampleForm.get('formArrayList');
  }

  addHsnListItem() {
    let formGroup: FormGroup = this.formBuilder.group({
      desc: this.formBuilder.control(null),
      // goodservice: this.formBuilder.control("SELECT"),
      hsn_sc: this.formBuilder.control(0),
      qty: this.formBuilder.control(0),
      uqc: this.formBuilder.control("SELECT"),
      val: this.formBuilder.control(0),
      txval: this.formBuilder.control(0),
      rt: this.formBuilder.control(0),
      camt: this.formBuilder.control(0),
      samt: this.formBuilder.control(0),
      iamt: this.formBuilder.control(0),
      rtCess: this.formBuilder.control(0),
      csamt: this.formBuilder.control(0),
      itemTotal: this.formBuilder.control(0)
    });

    const control = <FormArray>this.sampleForm.controls['formArrayList'];
    control.push(this.hsnRows());
  }

  deletehsnRow(index: number) {
    const control = <FormArray>this.sampleForm.controls['formArrayList'];
    control.removeAt(index);
  }

  submitForm(value) {
    console.log("form values", value);
  }

}
