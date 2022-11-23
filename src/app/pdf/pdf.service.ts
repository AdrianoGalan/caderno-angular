import { take } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  private readonly API = `${environment.API}api/pdf/`

  constructor(private http: HttpClient) { }

  gerar() {
    return this.http.get(`${this.API}gerar`,{responseType:'arraybuffer'}).pipe(take(1));
  }

  gerarMaquina(sigla: string) {
    return this.http.get(`${this.API}gerar/${sigla}`,{responseType:'arraybuffer'}).pipe(take(1));
  }






}
