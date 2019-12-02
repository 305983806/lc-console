import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

/**
 * Tips
 * -----------------------------
 * 关于使用 loadChildren 懒加载属性
 * 当用户访问当前路径的时候，才会加载对应的 SettingsModule 模块，这减少了应用启动时加载资源的大小。
 */
const routes: Routes = [
  { path: '',  loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule), canActivate: [AuthGuard] },
  { path: 'exception', loadChildren: () => import('./pages/exception/exception.module').then(m => m.ExceptionModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
