import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule
  ],
 templateUrl:'./create-form.component.html',
  styleUrl: './create-form.component.css',
})
export class CreateFormComponent {
  dynamicForm$!:FormGroup;
  isFormSubmit!:boolean;
  constructor(private fb:FormBuilder) {
    this.form();
  }

  ngOnInit(): void {
  }

  form(){
    this.dynamicForm$ = this.fb.group({
      items:this.fb.array([])
    })
  }

  addItems(){
  this.items.push(this.fb.group({
  label:['', Validators.required],
  textField:[null, Validators.required],
  validation:[''],
  optionType:[''],
  selectOption:[''],
  apiEndPoint:[''],
  displayExpr:[''],
  valueExpr:['']

  }))
  }

  get items(){
    return this.dynamicForm$.get('items') as FormArray;
  }

  removeItem(i:number){
    this.items.removeAt(i);
  }
  submit(){
    console.log("content", this.dynamicForm$.value);
  }
 }
