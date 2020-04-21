import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IBMIContact } from './IBMIContact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
  private actionUrl: string;
  response: any;
  constructor(private http: HttpClient) {
    this.actionUrl = 'http://localhost:8080/USHCAM';
  }
  getIBMIContactsList(): Observable <HttpResponse<IBMIContact[]>> {
    return this.http.get<IBMIContact[]>(
      this.actionUrl + '/admin/IBMIContacts/viewIBMIContact/', { observe: 'response' });
  }

}
