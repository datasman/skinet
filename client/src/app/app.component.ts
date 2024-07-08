import { HttpClient } from '@angular/common/http';
import { Statement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from './Modules/product';
import { Pagination } from './Modules/Pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  products: Product[] = [];


  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<Pagination<Product[]>>('https://localhost:5001/api/products?pageSize=50').subscribe({
      next: (response) => this.products = response.data, //what to do next
      error: error => console.log(error), ///what to do if there's error
      complete: () => {
        console.log('request completed');
        console.log('extra Statement');
      }
    })
  }
}
