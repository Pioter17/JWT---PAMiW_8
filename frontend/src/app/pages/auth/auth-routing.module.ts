import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesPath } from 'src/app/core/enums/routes-path.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutesPath.LOGIN,
    pathMatch: 'full'
  },
  {
    path: RoutesPath.REGISTER,
    loadChildren: () => import('../../pages/auth/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: RoutesPath.LOGIN,
    loadChildren: () => import('../../pages/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    redirectTo: RoutesPath.LOGIN,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
