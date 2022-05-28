import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Users } from 'src/interface';

@Injectable({
  providedIn: 'root'
})
export class HttpFetchService {

  url: string = "https://jsonplaceholder.typicode.com/albums";

  constructor(private client: HttpClient) { }


  fetchData(): Observable<HttpResponse<Users>> {
    // return this.client.get<Users>(this.url);
    return this.client.get<Users>(
      this.url, { observe: 'response' })
    // .pipe(catchError((error)=>{
    //   console.log(error)}));
    //   return throwError("error");
  }

  handleError(error: HttpErrorResponse) {
    console.log(error)
  }


  // fetchDataWithError() {
  //   return this.client.get<Users>(this.url)
  //     .pipe(
  //       catchError
  //         (
  //           (err: any, caught: Observable<Users>) => 
  //           {
  //             throwError(this.handleError(err))
  //           }
  //         )
  //     );
  // }

  // fetchJsonpName(id: number): Observable<> {
  //   const urlId = `${this.url}/${id}`;

  //   return this.client.jsonp(urlId,'callback')
  // .pipe(
  //   catchError(this.handleError('searchHeroes',[]))
  // )
  // }
}
