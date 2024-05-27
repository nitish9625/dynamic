import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fb:FormBuilder) { }

  createForm(fields:any[]):FormGroup{
    const formGroup = this.fb.group({});
    fields.forEach(field=>{
      const control = this.createControl(field);
      formGroup.addControl(field.label, control);
    });
    return formGroup;
  }

  private createControl(field:any):FormControl{
    const validators = [];
    if (field.validation.includes('required')) {
      validators.push(Validators.required);
    }
    return this.fb.control('', validators);
  }

  formTemplate(){
    return of(
      [
        {
            "label": "Testting",
            "textField": "input",
            "validation": [
                "required"
            ],
            "optionType": "",
            "selectOption": "",
            "apiEndPoint": "",
            "displayExpr": "",
            "valueExpr": ""
        },
        {
            "label": "seodng",
            "textField": "select",
            "validation": [
                "required"
            ],
            "optionType": "custom",
            "selectOption": "1,\n2,\n3,\n4",
            "apiEndPoint": "",
            "displayExpr": "",
            "valueExpr": ""
        },
        {
            "label": "Third",
            "textField": "select",
            "validation": [
                "required"
            ],
            "optionType": "api",
            "selectOption": "",
            "apiEndPoint": "https://jsonplaceholder.typicode.com/posts",
            "displayExpr": "title",
            "valueExpr": "id"
        },
        {
            "label": "check box",
            "textField": "checkbox",
            "validation": [
                "required"
            ],
            "optionType": "",
            "selectOption": "",
            "apiEndPoint": "",
            "displayExpr": "",
            "valueExpr": ""
        }
    ]
    )
  }

}
