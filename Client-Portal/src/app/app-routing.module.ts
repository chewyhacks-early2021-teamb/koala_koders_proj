import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { PharmComponent } from './pharm/pharm.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {path:'',redirectTo:'login', pathMatch: 'full' },
  { path: 'pharm', component: PharmComponent },
{ path: 'user', component: UserComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
