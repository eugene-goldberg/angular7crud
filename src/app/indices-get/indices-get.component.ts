import { Component, OnInit } from '@angular/core';
import Index from '../Index';
import {IndexService} from '../index.service';

@Component({
  selector: 'app-indices-get',
  templateUrl: './indices-get.component.html',
  styleUrls: ['./indices-get.component.css']
})
export class IndicesGetComponent implements OnInit {

  indices: any[];

  constructor(private is: IndexService) { }

  ngOnInit() {
     this.listAllIndices();
  }

   listAllIndices = function() {
     console.log('indices-get.component.ts');
     this.is
       .getIndex()
       .subscribe((data: Index) => {
         this.indices = data;
       });
  };

}
