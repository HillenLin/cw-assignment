import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { AboutRoutingModule } from './category-routing.module';
import { ProductDetailComponent } from '../product/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CategoryComponent, ProductDetailComponent],
  // exports: [ProductDetailComponent],
})
export class CategoryModule { }
