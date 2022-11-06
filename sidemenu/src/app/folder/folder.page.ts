
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GpsService } from '../api/gps.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage  {
  activeTab = 'chats';
  constructor(private activatedRoute: ActivatedRoute) { }

  segmentChange(e){
    this.activeTab=e.target.value;
  }
}

export class Fol implements OnInit {

  constructor( 
    private gps : GpsService
  ) {}
  ngOnInit() {
    this.gps.obtenerPosicion();
    
  }
}

