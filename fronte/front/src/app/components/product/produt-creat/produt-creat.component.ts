import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produt-creat',
  templateUrl: './produt-creat.component.html',
  styleUrls: ['./produt-creat.component.css']
})
export class ProdutCreatComponent implements OnInit {

Product: Product = {

  name: '',
  price: ''
}

  constructor( private ProductService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void{
    this.ProductService.create(this.Product).subscribe(() =>{
      this.ProductService.showMessage('Operação executada com sucesso!')
      this.router.navigate(['/products'])
    })
  
}

cancel(): void{
  this.router.navigate(['/products'])
}


}
