import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<any> {
    console.log(file);
    let formData = new FormData();
    formData.append('file', file);
    return this.http.post(environment.apiUrl.concat('/upload'), formData);
  }

}
