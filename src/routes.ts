import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { UserComponent } from './app/user/user.component';
import { SignUpComponent } from './app/user/sign-up/sign-up.component';
import { SignInComponent } from './app/user/sign-in/sign-in.component';

export const appRoutes : Routes=[
    { path:'home', component:HomeComponent},
    {
        path:'signUp', component:UserComponent,
        children:[{path:'', component:SignUpComponent}]
    },
    {
        path:'login', component:UserComponent,
        children:[{path:'', component:SignInComponent}]
    },
    { path:' ', redirectTo :'/login',pathMatch:'full'}
];