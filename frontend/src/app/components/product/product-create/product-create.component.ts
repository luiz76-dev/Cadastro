import { Product } from './../../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {    
   
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado') 
      this.router.navigate(['/product'])   
    });

  }
  cancel(): void {
    this.router.navigate(['/product'])

  }
};
