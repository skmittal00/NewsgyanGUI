import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-popup-update',
  templateUrl: './popup-update.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .dark-modal .modal-content {
    background-color: #292b2c;
    color: white;
  }
  .dark-modal .close {
    color: white;
  }
  .light-blue-backdrop {
    background-color: #5cb3fd;
  }
`]
})
export class PopupUpdateComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  closeResult: string;

  ngOnInit() {
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
}


