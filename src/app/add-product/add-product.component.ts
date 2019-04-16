import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  formProduct: FormGroup;
constructor(private fb: FormBuilder, private ps :ProductService) {
  this.createForm();
}

createForm() {
  this.formProduct = this.fb.group({
    name: ['', Validators.required ],
    code: ['', Validators.required ],
    price: ['', Validators.required ]
  });
}

addProduct(name, code, price) {
  this.ps.add(name, code, price);
}

  ngOnInit() {
  }

}
