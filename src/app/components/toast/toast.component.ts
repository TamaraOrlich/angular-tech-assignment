import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  bannerMessage$: Observable<{ message: string, isSuccessful?: boolean }>;

  constructor(private store: Store) {
    //@ts-ignore
    this.bannerMessage$ = this.store.select('toastMessage');
  }

}
