import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormsModule, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserserviceService } from '../Service/userservice.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
apiString:String = "http://localhost:8080";
UserModel = new User("","","","","","","",false)
  constructor(private userservice: UserserviceService) { }

  ngOnInit() {
  }


  onSubmit(){
    this.userservice.AddOneUser(this.UserModel);
}

}
