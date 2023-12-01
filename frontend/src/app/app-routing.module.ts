import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesPath } from '../app/core/enums/routes-path.enum';
import { AuthorizationGuardGuard } from '../app/core/guards/authorization-guard.guard';
const routes: Routes = [

  {
    path: RoutesPath.AUTH,
    loadChildren: () => import('../app/pages/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: "",
    loadChildren: () => import('../app/pages/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthorizationGuardGuard],
    canLoad: [AuthorizationGuardGuard],
  },
  // {
  //   path: '',
  //   redirectTo: `${RoutesPath.HOME}/${RoutesPath.DASHBOARD}`,
  //   pathMatch: 'full'
  // },
  // {
  //   path: '**',
  //   redirectTo: `${RoutesPath.HOME}/${RoutesPath.DASHBOARD}`,
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
