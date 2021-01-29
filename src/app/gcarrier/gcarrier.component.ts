import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-gcarrier',
  templateUrl: './gcarrier.component.html',
  styleUrls: ['./gcarrier.component.css']
})
export class GcarrierComponent implements OnInit {

  showForm: boolean = true;
  TotalRow: number;
  Form: FormGroup;
  Form1: FormGroup;
  Form2: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.Form = this._fb.group({
      paps: this._fb.array([this.initPaps()],)
    });
    this.Form1 = this._fb.group({
      delivery_historys: this._fb.array([this.initDeliveryHistorys()],)
    });
    this.Form2 = this._fb.group({
      residences: this._fb.array([this.initResidences()],)
    });
  }

  initResidences() {
    return this._fb.group({
      no: [''],
      address: [''],
      city: [''],
      years: ['']
    });
  }

  addNewRow2() {
    const control = <FormArray>this.Form2.controls['residences'];
    control.push(this.initResidences());
  }

  deleteRow2(index: number) {
    const control = <FormArray>this.Form2.controls['residences'];
    if (control != null) {
      this.TotalRow = control.value.length;
    }
    if (this.TotalRow > 1) {
      control.removeAt(index);
    } else {
      alert('One record is mandatory.');
      return false;
    }
  }

  initDeliveryHistorys() {
    return this._fb.group({
      surrogacy: [''],
      birthDate: [''],
      vaginal: [''],
      birthWeight: [''],
      number: ['']
    });
  }

  addNewRow1() {
    const control = <FormArray>this.Form1.controls['delivery_historys'];
    control.push(this.initDeliveryHistorys());
  }

  deleteRow1(index: number) {
    const control = <FormArray>this.Form1.controls['delivery_historys'];
    if (control != null) {
      this.TotalRow = control.value.length;
    }
    if (this.TotalRow > 1) {
      control.removeAt(index);
    } else {
      alert('One record is mandatory.');
      return false;
    }
  }

  initPaps() {
    return this._fb.group({
      No: [''],
      last_pap: [''],
      result_pap: ['']
    });
  }

  addNewRow() {
    const control = <FormArray>this.Form.controls['paps'];
    control.push(this.initPaps());
  }

  deleteRow(index: number) {
    const control = <FormArray>this.Form.controls['paps'];
    if (control != null) {
      this.TotalRow = control.value.length;
    }
    if (this.TotalRow > 1) {
      control.removeAt(index);
    } else {
      alert('One record is mandatory.');
      return false;
    }
  }

  gcform2: FormGroup = new FormGroup ({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl(0, Validators.required),
    outside_USA: new FormControl('', Validators.required),
    zip_code: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    telephone_number: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    spouse_name: new FormControl('', Validators.required),
    spouse_email: new FormControl('', Validators.required),
    height: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    bmi: new FormControl('', Validators.required),
    citizenship_status: new FormControl(0, Validators.required),
    other_citizenship: new FormControl('', Validators.required),
    bioChildren: new FormControl(0, Validators.required),
    inspired: new FormControl('', Validators.required),
    hear: new FormControl(0, Validators.required),
    Coordinator: new FormControl('', Validators.required),
    surrogate: new FormControl('', Validators.required),
    Tier: new FormControl('', Validators.required),
    fertility: new FormControl('', Validators.required),
    TD_number: new FormControl('', Validators.required),
    TD_date: new FormControl('', Validators.required),
    PT_number: new FormControl('', Validators.required),
    PT_date: new FormControl('', Validators.required),
    SM_number: new FormControl('', Validators.required),
    SM_date: new FormControl('', Validators.required),
    EA_number: new FormControl('', Validators.required),
    EA_date: new FormControl('', Validators.required),
    S_number: new FormControl('', Validators.required),
    S_date: new FormControl('', Validators.required),
    c_sections: new FormControl('', Validators.required),
    pregnancies: new FormControl(0, Validators.required),
    complications: new FormControl(0, Validators.required),
    recent_delivery: new FormControl(0, Validators.required),
    breastfeeding: new FormControl(0, Validators.required),
    birth_control: new FormControl(0, Validators.required),
    explain_method: new FormControl('', Validators.required),
    DP_started: new FormControl('', Validators.required),
    DP_stopped: new FormControl('', Validators.required),
    IUD_started: new FormControl('', Validators.required),
    IUD_stopped: new FormControl('', Validators.required),
    N_started: new FormControl('', Validators.required),
    N_stopped: new FormControl('', Validators.required),
    endometrial: new FormControl('', Validators.required),
    anti_depression: new FormControl(0, Validators.required),
    psychological: new FormControl('', Validators.required),
    Amphetamines_yes: new FormControl(false),
    Amphetamines_no: new FormControl(false),
    Barbiturates_yes: new FormControl(false),
    Barbiturates_no: new FormControl(false),
    Cocaine_yes: new FormControl(false),
    Cocaine_no: new FormControl(false),
    Hallucinogens_yes: new FormControl(false),
    Hallucinogens_no: new FormControl(false),
    Heroin_yes: new FormControl(false),
    Heroin_no: new FormControl(false),
    LSD_yes: new FormControl(false),
    LSD_no: new FormControl(false),
    Marijuana_yes: new FormControl(false),
    Marijuana_no: new FormControl(false),
    Narcotics_yes: new FormControl(false),
    Narcotics_no: new FormControl(false),
    Opiates_yes: new FormControl(false),
    Opiates_no: new FormControl(false),
    PCP_yes: new FormControl(false),
    PCP_no: new FormControl(false),
    alcoholic: new FormControl('', Validators.required),
    explain_alcohol: new FormControl('', Validators.required),
    smoke: new FormControl('', Validators.required),
    Diabetes: new FormControl('', Validators.required),
    Heart: new FormControl('', Validators.required),
    High: new FormControl('', Validators.required),
    Ovarian: new FormControl('', Validators.required),
    Uterine: new FormControl('', Validators.required),
    Thyroid: new FormControl('', Validators.required),
    asthmatic: new FormControl('', Validators.required),
    gestational: new FormControl('', Validators.required),
    migraine: new FormControl('', Validators.required),
    Ovarian_Cystectomy_yes: new FormControl('', Validators.required),
    Ovarian_Cystectomy_no: new FormControl('', Validators.required),
    Fibroid_Removal_yes: new FormControl('', Validators.required),
    Fibroid_Removal_no: new FormControl('', Validators.required),
    Salpingectomy_yes: new FormControl('', Validators.required),
    Salpingectomy_no: new FormControl('', Validators.required),
    Oophorectomy_yes: new FormControl('', Validators.required),
    Oophorectomy_no: new FormControl('', Validators.required),
    Other_yes: new FormControl('', Validators.required),
    Other_no: new FormControl('', Validators.required),
    AIDS_Me: new FormControl(false),
    AIDS_Partner: new FormControl(false),
    AIDS_None: new FormControl(false),
    Genital_Warts_Me: new FormControl(false),
    Genital_Warts_Partner: new FormControl(false),
    Genital_Warts_None: new FormControl(false),
    Hepatitis_B_Me: new FormControl(false),
    Hepatitis_B_Partner: new FormControl(false),
    Hepatitis_B_None: new FormControl(false),
    Hepatitis_C_Me: new FormControl(false),
    Hepatitis_C_Partner: new FormControl(false),
    Hepatitis_C_None: new FormControl(false),
    Herpes_Me: new FormControl(false),
    Herpes_Partner: new FormControl(false),
    Herpes_None: new FormControl(false),
    HIV_Me: new FormControl(false),
    HIV_Partner: new FormControl(false),
    HIV_None: new FormControl(false),
    HPV_Me: new FormControl(false),
    HPV_Partner: new FormControl(false),
    HPV_None: new FormControl(false),
    Syphilis_Me: new FormControl(false),
    Syphilis_Partner: new FormControl(false),
    Syphilis_None: new FormControl(false),
    Trichomonas_Me: new FormControl(false),
    Trichomonas_Partner: new FormControl(false),
    Trichomonas_None: new FormControl(false),
    Chlamydia_Me: new FormControl(false),
    Chlamydia_Partner: new FormControl(false),
    Chlamydia_None: new FormControl(false),
    Gonorrhea_Warts_Me: new FormControl(false),
    Gonorrhea_Warts_Partner: new FormControl(false),
    Gonorrhea_Warts_None: new FormControl(false),
    insurance: new FormControl('', Validators.required),
    Asian_mother: new FormControl(false),
    Asian_father: new FormControl(false),
    Black_mother: new FormControl(false),
    Black_father: new FormControl(false),
    Latino_mother: new FormControl(false),
    Latino_father: new FormControl(false),
    Native_mother: new FormControl(false),
    Native_father: new FormControl(false),
    German_mother: new FormControl(false),
    German_father: new FormControl(false),
    French_mother: new FormControl(false),
    French_father: new FormControl(false),
    Irish_mother: new FormControl(false),
    Irish_father: new FormControl(false),
    Italian_mother: new FormControl(false),
    Italian_father: new FormControl(false),
    Pacific_mother: new FormControl(false),
    Pacific_father: new FormControl(false),
    Cherokee_mother: new FormControl(false),
    Cherokee_father: new FormControl(false),
    Caucasian_mother: new FormControl(false),
    Caucasian_father: new FormControl(false),
    Other_mother: new FormControl(false),
    Other_father: new FormControl(false),
    tribal: new FormControl('', Validators.required),
    highest_level_education: new FormControl(0, Validators.required),
    Occupation: new FormControl('', Validators.required),
    appointments: new FormControl('', Validators.required),
    exposed: new FormControl('', Validators.required),
    explain_exposed: new FormControl('', Validators.required),
    drivers_license: new FormControl(0, Validators.required),
    transportation: new FormControl(0, Validators.required),
    living: new FormControl('', Validators.required),
    relationship: new FormControl('', Validators.required),
    marital_status: new FormControl(0, Validators.required),
    living_home: new FormControl('', Validators.required),
    support: new FormControl('', Validators.required),
    legal_cases: new FormControl('', Validators.required),
    restraining: new FormControl('', Validators.required),
    divorce: new FormControl('', Validators.required),
    legal_name: new FormControl('', Validators.required),
    complete_names: new FormControl('', Validators.required),
    felony: new FormControl(0, Validators.required),
    partner_felony: new FormControl(0, Validators.required)
  });

  onSubmit() {
    if (this.gcform2.valid) {
      console.log("Form Submitted!", this.gcform2.value);
      /* this.Submit(this.service.form.value).subscribe((result) => {
        console.warn("Result is here", result);
      }) */
    }
  }
}
