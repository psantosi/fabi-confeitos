import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private http = inject(HttpClient);

  
  sendOrder(orderDTO: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  

    return this.http.post(`${environment.urlApi}/order`, orderDTO, { headers });
  }
}
