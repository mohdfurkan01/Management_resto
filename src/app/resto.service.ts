import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RestoService {
  url = 'http://localhost:3000/restaurants';
  rooturl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  getList() {
    // console.log("Some data")
    // //console.warn("Some data")
    // return "data list here"

    return this.http.get(this.url);
  }

  saveResto(data: any) {
    //console.log(data);
    //return this.http.post(this.url.data) ye error dega
    return this.http.post<any>('http://localhost:3000/restaurants', data);
  }
  deleteResto(id: any) //deleteResto(1,2,3,4,5:any)
  {
    return this.http.delete(`${this.url}/${id}`);
  }
  // {
  //   return this.http.delete(`${this.url}/${1}`)
  //   return this.http.delete(`${this.url}/${2}`) // just trying for our table data
  // }
  getCurrentResto(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }
  updateResto(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
  registerUser(data: any) {
    return this.http.post(this.rooturl + 'users', data);
  }
  loginUser(data:any){
    return this.http.post(this.rooturl + 'users',data)
    
  }
}


