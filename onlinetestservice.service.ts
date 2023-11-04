import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OnlinetestserviceService {

 //url of API
 url = "http://localhost:3000/Candidates"
 rootUrl = "http://localhost:3000/"
 constructor(private http: HttpClient) { }
 getList() {
   return this.http.get(this.url);
 }
 saveCandidate(data: Partial<{ name: string | null; email: string | null; address: string | null; score: string | null; }>) {
   return this.http.post(this.url, data)
  }

 deleteCandidate(id: number) {
   return this.http.delete(`${this.url}/${id}`)
 }
 getCurrentCandidate(id: any){
   return this.http.get(`${this.url}/${id}`)
 }
 updateCandidate(id: any,data: any){
   return this.http.put(`${this.url}/${id}`,data)
 }
 registerCandidate(data: any){
   return this.http.post(this.rootUrl+"newCandidate",data)
 }
}