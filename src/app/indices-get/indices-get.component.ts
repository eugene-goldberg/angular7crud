import { Component, OnInit } from '@angular/core';
import Index from '../Index';
import {IndexService} from '../index.service';

@Component({
  selector: 'app-indices-get',
  templateUrl: './indices-get.component.html',
  styleUrls: ['./indices-get.component.css']
})
export class IndicesGetComponent implements OnInit {

  indices: Index;

  constructor(private is: IndexService) { }

  ngOnInit() {

  }

   listAllIndices = function() {
     console.log('indices-get.component.ts');
     this.is
       .getIndex()
       .subscribe((data: Index) => {
         this.indices = data;
         console.log(this.indices);
       });
  };

}
