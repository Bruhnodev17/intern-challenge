import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {

  product!: any;
  productId!: any;
  stock!: "?"

  isLoadingTitle: string = "Loading"
  isLoading: boolean = false;
  errors: any = [];
perishable: any;

  constructor(private route: ActivatedRoute, private productService: ProductService){}

  ngOnInit(){
    this.isLoading = true

    this.productId =  this.route.snapshot.paramMap.get('id');
    //alert(this.productId)

    this.productService.getProduct(this.productId).subscribe(res=>{
      console.log(res)
      this.product = res

        this.isLoading = false
    })

  }

  updateProduct(){
    let inputData = {
      name: this.product.name,
      price: this.product.price,
      validity: this.product.validity,
      perishable: this.product.perishable,
      stock: this.product.stock,
    }

    this.isLoading = true

    this.productService.updateProduct(inputData, this.productId).subscribe({
        next: (res:any) =>{
          console.log(res)
          alert(res.message)
          this.isLoading = false
        },
        error: (err:any): void =>{
          console.log(err)
          this.errors = err.error.errors
          this.isLoading = false

          alert('Produto atualizado com sucesso!')
        }
    })

  }



}
