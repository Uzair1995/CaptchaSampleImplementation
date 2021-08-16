import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PersonalDetailsFirstLevelComponent } from './personal-details-first-level/personal-details-first-level.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: "personaldetailsfirstlevel", component: PersonalDetailsFirstLevelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }