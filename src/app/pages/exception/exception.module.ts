import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExceptionRoutingModule } from './exception-routing.module';
import { ExceptionComponent } from './exception.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [ ExceptionComponent ],
  imports: [
    CommonModule,
    ExceptionRoutingModule,
    NgZorroAntdModule
  ],
  exports: [ ExceptionComponent ]
})
export class ExceptionModule { }
