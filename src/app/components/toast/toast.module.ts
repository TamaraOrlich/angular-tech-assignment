import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from './toast.component';



@NgModule({
  declarations: [ToastComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ToastComponent]
})
export class ToastModule { }
