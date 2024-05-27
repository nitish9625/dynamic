import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',redirectTo:'birthday', pathMatch:'full'
  },
  {path:'create-form', loadComponent:()=> import('./create-form/create-form.component').then(m=>m.CreateFormComponent)},
  {
    path:'form-template', loadComponent:()=> import('./form-template/form-template.component').then(m=>m.FormTemplateComponent)
  },
  {
    path:'birthday', loadComponent:()=>import('./Birthday/Birthday.component').then(m=>m.BirthdayComponent)
  }
];
