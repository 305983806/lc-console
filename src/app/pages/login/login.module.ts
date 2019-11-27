import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';


/**
 * 一个 Module 指的是使用 @NgModule 修饰的 class。
 */
@NgModule({
  // 模块内部Components/Directives/Pipes的列表，声明一下这个模块内部成员
  declarations: [LoginComponent],
  // 导入其他module，其它module暴露的出的Components、Directives、Pipes等可以在本module的组件中被使用。
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  // 用来控制将哪些内部成员暴露给外部使用。导入一个module并不意味着会自动导入这个module内部导入的module所暴露出的公共成员。除非导入的这个module把它内部导入的module写到exports中。
  exports: [LoginComponent]
})
export class LoginModule { }
