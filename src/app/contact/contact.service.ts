import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  postQuery(queryData){
    console.log(queryData);
    // 1. identify REST API URL: http://jsonplaceholder.typicode.com/users
    // 2. What's the HTTP Method - POST
    // 3. Use http client to hit the rest api 
    return this.http.post('http://jsonplaceholder.typicode.com/users', queryData)
      .pipe(map( (res: any ) => { // 4. get the response from the rest api
        console.log(res);
        return res; // 5. send the resp back to page
      }));
  }
}
