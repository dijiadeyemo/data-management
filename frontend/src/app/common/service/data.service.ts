import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Data from '../domain/data';

@Injectable({ providedIn: 'root' })
class DataService {
    private dataUrl: string = 'http://localhost:3000/data';
    constructor(
        private http: HttpClient,
    ) { }

    getDataList(): Observable<Data[]> {
        return this.http.get<Data[]>(this.dataUrl);
    }
}

export default DataService;