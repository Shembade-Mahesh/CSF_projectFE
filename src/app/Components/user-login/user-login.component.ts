import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  signupUsers: any[]=[];
  signupobj:any={
    userName:'',
    email:'',
    password:''
  };
  loginObj: any={
    userName:'',
    password:''
  };
  constructor(){}
  ngOnInit():void {
    const localData=localStorage.getItem('signupUsers');
    if(localData !=null){
      this.signupUsers=JSON.parse(localData);
    }
    
  }
  onSignup(){
    this.signupUsers.push(this.signupobj);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers)); 
    this.signupobj={
      userName:'',
      email:'',
      password:''
    }
  }
  onLogin(){
    debugger
    const isUserExit=this.signupUsers.find(m=>m.userName== this.loginObj.userName && m.password==this.loginObj.password);
    if(isUserExit !=undefined){
      alert('user login successfully');
    }else{
      alert('wrong credentials');
    }

  }

}
