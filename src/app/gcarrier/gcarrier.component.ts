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

  felony = new FormControl('', [Validators.required]);
  partner_felony = new FormControl('', [Validators.required]);

  gcform2: FormGroup = new FormGroup ({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    photos: new FormControl('', Validators.required),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(0),
    state_fill: new FormControl(''),
    outside_USA: new FormControl(''),
    zip_code: new FormControl(''),
    birthDate: new FormControl(''),
    age: new FormControl(''),
    telephone_number: new FormControl(''),
    email: new FormControl(''),
    spouse_name: new FormControl(''),
    spouse_email: new FormControl(''),
    citizenship_status: new FormControl(0),
    other_citizenship: new FormControl(''),
    bioChildren: new FormControl(0),
    inspired: new FormControl(''),
    hear: new FormControl(0),
    Coordinator: new FormControl(''),
    surrogate: new FormControl(''),
    TD_number: new FormControl(''),
    TD_date: new FormControl(''),
    PT_number: new FormControl(''),
    PT_date: new FormControl(''),
    SM_number: new FormControl(''),
    SM_date: new FormControl(''),
    EA_number: new FormControl(''),
    EA_date: new FormControl(''),
    S_number: new FormControl(''),
    S_date: new FormControl(''),
    c_sections: new FormControl(''),
    pregnancies: new FormControl(0),
    complications: new FormControl(0),
    recent_delivery: new FormControl(0),
    breastfeeding: new FormControl(0),
    birth_control: new FormControl(0),
    explain_method: new FormControl(''),
    DP_started: new FormControl(''),
    DP_stopped: new FormControl(''),
    IUD_started: new FormControl(''),
    IUD_stopped: new FormControl(''),
    N_started: new FormControl(''),
    N_stopped: new FormControl(''),
    endometrial: new FormControl(''),
    anti_depression: new FormControl(0),
    psychological: new FormControl(''),
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
    alcoholic: new FormControl(''),
    explain_alcohol: new FormControl(''),
    smoke: new FormControl(''),
    Diabetes: new FormControl(''),
    Heart: new FormControl(''),
    High: new FormControl(''),
    Ovarian: new FormControl(''),
    Uterine: new FormControl(''),
    Thyroid: new FormControl(''),
    asthmatic: new FormControl(''),
    gestational: new FormControl(''),
    migraine: new FormControl(''),
    Ovarian_Cystectomy_yes: new FormControl(''),
    Ovarian_Cystectomy_no: new FormControl(''),
    Fibroid_Removal_yes: new FormControl(''),
    Fibroid_Removal_no: new FormControl(''),
    Salpingectomy_yes: new FormControl(''),
    Salpingectomy_no: new FormControl(''),
    Oophorectomy_yes: new FormControl(''),
    Oophorectomy_no: new FormControl(''),
    Other_yes: new FormControl(''),
    Other_no: new FormControl(''),
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
    insurance: new FormControl(''),
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
    tribal: new FormControl(''),
    highest_level_education: new FormControl(0),
    Occupation: new FormControl(''),
    appointments: new FormControl(''),
    exposed: new FormControl(''),
    explain_exposed: new FormControl(''),
    drivers_license: new FormControl(0),
    transportation: new FormControl(0),
    living: new FormControl(''),
    relationship: new FormControl(''),
    marital_status: new FormControl(0),
    living_home: new FormControl(''),
    support: new FormControl(''),
    legal_cases: new FormControl(''),
    restraining: new FormControl(''),
    divorce: new FormControl(''),
    legal_name: new FormControl(''),
    complete_names: new FormControl(''),
  });

  onSubmit() {
    if (this.gcform2.valid) {
      console.log("Form Submitted!", this.gcform2.value);
      /* this.Submit(this.service.form.value).subscribe((result) => {
        console.warn("Result is here", result);
      }) */
    }
  }

  cal_bmi(lbs, ins)
  {
    let h2 = ins * ins;
    let bmi: any = lbs/h2 * 703;
    let f_bmi = Math.floor(bmi);
    let diff  = bmi - f_bmi;
    diff = diff * 10;
    diff = Math.round(diff);
    if (diff == 10)
    {
      f_bmi += 1;
      diff   = 0;
    }
    bmi = f_bmi + "." + diff;
    return bmi;
  }

  compute()
  {
    var f = self.document.forms[0];
    let w = f.wt.value;
    let v = f.htf.value;
    let u = f.hti.value;
    if (!this.chkw(u))
    {
    var ii = 0;
    f.hti.value = 0;
    } else
    {
    let it = f.hti.value*1;
    var ii = it;
    }
    var fi = f.htf.value * 12;
    var i =  f.htf.value * 12 + f.hti.value*1.0;  
    if (!this.chkw(v))
    {
    alert("Please enter a number for your height.");
    f.htf.focus();
    return;
    }
    if (!this.chkw(w))
    {
    alert("Please enter a number for your weight.");
    f.wt.focus();
    return;
    }
    // Perform the calculation
    f.bmi.value = this.cal_bmi(w, i);
    f.bmi.focus();
  }

  chkw(w){
    if (isNaN(parseInt(w))){
      return false;
    } else if (w < 0){
      return false;
    }
    else{
      return true;
    }
  }

}
