import {
  EventEmitter,
  Output,
  Component,
  OnInit,
  Input
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Authenticate } from '../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor() {}
  //these are coming from the parent
  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      this.form.disable;
    } else {
      this.form.enable;
    }
  }
  @Input() errorMessage: string | null;
  @Output() submitted = new EventEmitter<Authenticate>();
  ngOnInit() {}
  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.submitted.emit(this.form.value)
    }
  }
}
