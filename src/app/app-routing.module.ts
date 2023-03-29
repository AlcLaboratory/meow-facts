import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'logowanie' },
  {
    path: 'logowanie',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'kocie-fakty',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./meow-facts/meow-facts.module').then((m) => m.MeowFactsModule),
  },
  { path: '**', redirectTo: 'logowanie' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
