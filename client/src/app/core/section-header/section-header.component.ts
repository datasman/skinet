import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { BreadcrumbService } from 'xng-breadcrumb';
>>>>>>> 28687429caa5c4adf4a5dc3d1ed17b296df9d415

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
<<<<<<< HEAD
export class SectionHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
=======
export class SectionHeaderComponent {

  constructor(public bcService: BreadcrumbService) { }
>>>>>>> 28687429caa5c4adf4a5dc3d1ed17b296df9d415

}
