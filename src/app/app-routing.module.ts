import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

/**
 * Tips
 * -----------------------------
 * 关于使用 loadChildren 懒加载属性
 * 当用户访问当前路径的时候，才会加载对应的 SettingsModule 模块，这减少了应用启动时加载资源的大小。
 */
const routes: Routes = [
  { path: '',  loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
