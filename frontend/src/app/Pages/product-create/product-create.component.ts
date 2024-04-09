import { Component } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})


export class ProductCreateComponent {

  constructor(private productService: ProductService){}

  name!: string;
  price!: number | string;
  validity!: Date | string;
  perishable!: boolean;
  stock!: number | string;

  isLoadingTitle: string = "Loading"
  isLoading: boolean = false;
  errors: any = [];
  form!: NgForm;



  saveProduct() {
    this.isLoading = true
    this.isLoadingTitle = "Saving"

    let inputData = {
      name: this.name,
      price: this.price,
      validity: this.validity,
      perishable: this.perishable,
      stock: this.stock,
    }
    console.log(inputData)
      this.productService.saveProduct(inputData).subscribe({
        next: (res) => {
          console.log(res, 'response')

          this.name = "";
          this.price = "";
          this.validity = "";
          this.perishable = false
          this.stock = "";

          this.isLoading = false
        },
        error:(err) => {
          this.errors = err.error;
          this.isLoading = false

          console.log(err.error)
        }
      })

  }
  clearProducts() {
    this.name = '';
    this.price = '';
    this.validity = '';
    this.perishable ;
    this.stock = '';

    this.showSuccessPopup('Produto criado com sucesso!');

  }


  showSuccessPopup(message: string) {
    alert(message);
  }
}




