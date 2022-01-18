import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tambah } from '../model/tambah.model';

const baseUrl = 'https://spa-api.aqiladigital.com/api/divisions'

@Injectable({
  providedIn: 'root'
})

export class TambahService {

  constructor(private http:HttpClient) { }
  
  getAll():Observable<Tambah[]>{
    return this.http.get<Tambah[]>(baseUrl);
  }
 
}



