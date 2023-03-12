import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AuthenticationGuard } from './authentication.guard';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehiclesComponent } from './create-vehicles/create-vehicles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GradeComponent } from './grade/grade.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PhonesComponent } from './phones/phones.component';
import { ProductsComponent } from './products/products.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { WishComponent } from './wish/wish.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  
  {path: 'dashboard',canActivate:[AuthenticationGuard], component:DashboardComponent,children:[
    {path:'home', component:HomeComponent},
    {path:'data-binding', component:DataBindingComponent},
    {path:'calculator', component:CalculatorComponent},
    {path:'Rectangle' ,component:RectangleComponent},
    {path:'Directives', component:DirectivesComponent},
    {path:'registration',component:RegistrationComponent},
    {path:'wish',component:WishComponent},
    {path:'cart',component:CartComponent},
    {path:'grade',component:GradeComponent},
    {path:'cars',component:CarsComponent},
    {path:'phones',component:PhonesComponent},
    {path:'users',component:UsersComponent},
    {path:'vehicles',component:VehicleComponent},
    {path:'products',component:ProductsComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'create-vehicles',component:CreateVehiclesComponent},
    {path:'create-accounts', component:CreateAccountsComponent},
    {path:'create-student',component:CreateStudentComponent}
    
  ]},
  {path:'vehicles',component:VehicleComponent},
  {path:'products',component:ProductsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'accounts',component:AccountsComponent},
  {path:'', component:LoginComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
