import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LoginComponent } from './pages/login/login.component';

registerLocaleData(zh);

/**
 * 一个 Module 指的是使用 @NgModule 修饰的 class。
 */

@NgModule({
  // 模块内部Components/Directives/Pipes的列表，声明一下这个模块内部成员
  declarations: [
    AppComponent,
    LoginComponent
  ],
  // 导入其他module，其它module暴露的出的Components、Directives、Pipes等可以在本module的组件中被使用。
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  // 指定应用程序的根级别需要使用的service。
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  // 声明模块的主组件是什么
  bootstrap: [AppComponent]
})
export class AppModule { }
