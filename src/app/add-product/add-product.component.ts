import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  formProduct: FormGroup;
constructor(private fb: FormBuilder) {
  this.createForm();
}

createForm() {
  this.formProduct = this.fb.group({
    name: ['', Validators.required ],
    code: ['', Validators.required ],
    price: ['', Validators.required ]
  });
}

  ngOnInit() {
  }

}
