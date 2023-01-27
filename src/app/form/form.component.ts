import { Component } from '@angular/core';
import { NgForm, NgModel} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  search: string = '';

  onSubmitSearch(form: NgForm) {
    console.log(form);
  }
}
