import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormService } from '../form.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormSelectComponent } from './form-select/form-select.component';

export interface FormTemplate{
  label:        string;
  textField:    string;
  validation:   string[];
  optionType:   string;
  selectOption: any;
  apiEndPoint:  string;
  displayExpr:  string;
  valueExpr:    string;
}

@Component({
  selector: 'app-form-template',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormSelectComponent
  ],
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormTemplateComponent {
  form!:FormGroup;
  formTemplate$!:FormTemplate[];
  constructor(private formService:FormService, private fb:FormBuilder) {

  }

  ngOnInit(): void {

this.getTemplate();
  }

  getTemplate(){
    this.formService.formTemplate()
    .subscribe(res=>{
      console.log("res",res);
      this.formTemplate$ = res;
      this.form = this.formService.createForm(res);
      console.log("Form", this.form);
    })
  }

  onSubmit(){

    console.log(this.form.value);
  }
 }
