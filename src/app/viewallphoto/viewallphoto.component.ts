import { Component, OnInit } from '@angular/core';
import { PhoService } from '../pho.service';

@Component({
  selector: 'app-viewallphoto',
  templateUrl: './viewallphoto.component.html',
  styleUrls: ['./viewallphoto.component.css']
})
export class ViewallphotoComponent implements OnInit {

  constructor(private pho:PhoService) {this.dataFrompho()}
  dataFrompho=()=>{this.pho.fetchphoto().subscribe((Response=>{this.photo=Response}))}
  
  photo:any=[]

  ngOnInit(): void {
  }

}
