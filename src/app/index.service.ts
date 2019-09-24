import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  uri = '/indices';
  versionuri = '/getversion';

  constructor(private http: HttpClient) { }

  getIndex() {
    return this
           .http
           .get('/indices');
  }

  getVersion() {
    return this
           .http
           .get(`${this.versionuri}`);
  }
}
