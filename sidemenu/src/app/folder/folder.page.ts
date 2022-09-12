
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
