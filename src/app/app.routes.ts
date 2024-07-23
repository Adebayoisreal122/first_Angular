import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { ClothesComponent } from './clothes/clothes.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { ProductsComponent } from './products/products.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { DisplayGroceryComponent } from './display-grocery/display-grocery.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },
    { path: 'home', redirectTo: '', pathMatch: 'full'},
    { path: 'signin', component: SigninComponent,},
    { path: 'products', children: [
     { path: '', component: ProductsComponent, title: 'Products' },
        { path: 'groceries', title: 'Groceries', children: [
            { path: '', component: GroceriesComponent, title: 'Groceries' },
            { path: ':product-name', component: DisplayGroceryComponent, title: 'Groceries' },   //parameterized or dynamic routing
        ]},
        {path: 'clothes', component: ClothesComponent},
        {path: 'appliances', component: AppliancesComponent},
    
    ] }, 




    {path: '**', component:  PageNotfoundComponent,}, 
];
