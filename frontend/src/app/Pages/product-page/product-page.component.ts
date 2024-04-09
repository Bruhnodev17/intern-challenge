import { Component } from '@angular/core';
import { ProductService, ProductResponse } from 'src/app/Services/product.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  constructor(private productService: ProductService) {

  }



  products!: ProductResponse[];
  isLoading: boolean = false

  ngOnInit() {
    this.getProductLists()
  }

 maskDate(item: Date | string | number){
    return String(item).replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1')
 }

  getProductLists() {

    this.isLoading = true

    this.productService.getProducts().subscribe((res:any) => {
      console.log(res)
      this.products = res

      this.isLoading = false

    });
  }

  destroyProduct(event: any, productId:Number){
    if(confirm( `Are your sure you want to delete this data?`))
    {
      event.target.innerText = "Deleting..."

      this.productService.destroyProduct(productId).subscribe((res:any) =>{


        this.getProductLists()

        alert(res.message);


      })
      const newListProduct = this.products.filter(product => product.id !== productId)
      this.products = newListProduct

    }
  }
}
