import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../common/book';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  //back end url for pulling data for the back-end
  private baseUrl="http://localhost:8080/api/v1/books";

  constructor(private httpClient:HttpClient) { }

  // mapping embedded which is wrapped around and creating getbook method that will return an Observable book array
  //and making use of Httpclient to issue a getRequest and mapping it to GetResponseBook Interface
  getBooks():Observable<Book[]>{
    return this.httpClient.get<GetResponseBooks>(this.baseUrl).pipe(

      map(response => response._embedded.books)
    );
  }
}

interface GetResponseBooks{
  _embedded:{
    books:Book[];
  }
}
