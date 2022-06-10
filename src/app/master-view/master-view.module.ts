import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';
import { IgxSnackbarModule, IgxToggleModule, IgxSliderModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxDropDownModule, IgxNavbarModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MasterViewComponent,
    View1Component,
    View2Component,
    View3Component
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule,
    IgxSnackbarModule,
    IgxToggleModule,
    IgxSliderModule,
    IgxChipsModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxDropDownModule,
    FormsModule,
    IgxNavbarModule
  ]
})
export class MasterViewModule {
}
