import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormTemplate } from '../form-template.component';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map } from 'rxjs';

@Component({
  selector: 'app-form-select',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,

  ],
  template: `
  <div [formGroup]="form">
  <div class="form-group">
    <label class="form-label">{{field.label}}</label>
    @if(field.optionType =='custom'){
      <ng-select [formControlName]="field.label" [items]="options"></ng-select>
    }
    @if (field.optionType =='api') {
      <ng-select [formControlName]="field.label" [bindLabel]="field.displayExpr" [bindValue]="field.valueExpr" [items]="apiData$"> </ng-select>
    }

  </div>
  </div>
  `,
  styleUrl: './form-select.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSelectComponent {
  @Input() field!:FormTemplate;
  @Input() form!:FormGroup;
  options: string[] = [];
  apiData$!:any[];

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    console.log(this.field);
    if(this.field.optionType =='custom'){
      this.options = this.field.selectOption.split(',\n');
    }else if(this.field.optionType == 'api'){
      // fetch api call
      this.getApiData(this.field.apiEndPoint)
      .subscribe(res=>{
        console.log("res",res);
        this.apiData$ = res;
      })
    }

  }


  getApiData(api:any):Observable<any>{
    return this.http.get<any>(api)
    .pipe(map(resp=>{
      return resp;
    }))
  }
}
