import { Component, OnInit } from '@angular/core';

import {RestoService} from '../resto.service'

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(private resto:RestoService){}
  
 //collection = {};
   collection:any=[];
 //collection(item:any)
 
  ngOnInit(): void {
    
    
    //this.resto.getList() 
  //console.log(this.resto.getList() )
   this.resto.getList().subscribe((result)=>{
    console.log(result);
    this.collection=result;
  })
}
deleteResto(item:any){

  console.log(this.collection)
  this.collection.splice(item-1,1)

  this.resto.deleteResto(item).subscribe((result)=>{
    console.log(result)
    
  })
}
}
