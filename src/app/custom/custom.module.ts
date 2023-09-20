import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from '../Components/team/team.component';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { UserLoginComponent } from '../Components/user-login/user-login.component';



@NgModule({
  declarations: [TeamComponent,NavbarComponent,UserLoginComponent],
  exports: [TeamComponent,NavbarComponent,UserLoginComponent],
  imports: [
    CommonModule
  ]
})
export class CustomModule { }
