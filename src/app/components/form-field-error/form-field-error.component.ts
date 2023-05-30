import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-field-error',
  templateUrl: './form-field-error.component.html',
  styleUrls: ['./form-field-error.component.scss'],
})
export class FormFieldErrorComponent implements OnInit {
  @Input() conditionFlag?: boolean = false;
  @Input() errorMessage?: string;

  constructor() {}

  ngOnInit() {}
}
