import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { TestErrorComponent } from './test-error/test-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { ToastrModule } from 'ngx-toastr';
import { SectionHeaderComponent } from './section-header/section-header.component';
<<<<<<< HEAD


=======
import { BreadcrumbComponent, BreadcrumbModule } from 'xng-breadcrumb';
import { NgxSpinnerModule } from 'ngx-spinner';
>>>>>>> 28687429caa5c4adf4a5dc3d1ed17b296df9d415

@NgModule({
  declarations: [
     NavBarComponent,
     TestErrorComponent,
     NotFoundComponent,
     ServerErrorComponent,
     SectionHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    BreadcrumbModule,
    NgxSpinnerModule
  ],

  exports: [
    NavBarComponent,
<<<<<<< HEAD
    SectionHeaderComponent
=======
    SectionHeaderComponent,
    NgxSpinnerModule
>>>>>>> 28687429caa5c4adf4a5dc3d1ed17b296df9d415
    
  ]

})
export class CoreModule { }
