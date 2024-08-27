import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { ClothesComponent } from './clothes/clothes.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { ProductsComponent } from './products/products.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { DisplayGroceryComponent } from './display-grocery/display-grocery.component';
import { UserComponent } from './user/user.component';
import {ContactComponent} from './contact/contact.component'
import { ParentBehaviourComponent } from './parent-behaviour/parent-behaviour.component';
import { TempdrivenComponent } from './tempdriven/tempdriven.component';
import { AssignformComponent } from './assignform/assignform.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactivesigninComponent } from './reactivesignin/reactivesignin.component';
import { ReactivedashboardComponent } from './reactivedashboard/reactivedashboard.component';
import { TodoComponent } from './todo/todo.component';
import { guardGuard } from './guards/guard.guard';
import { GuardashboardComponent } from './guardashboard/guardashboard.component';
import { ParentpromptComponent } from './parentprompt/parentprompt.component';
import { MaterialComponent } from './material/material.component';
import { DatabasedComponent } from './databased/databased.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },
    { path: 'home', redirectTo: '', pathMatch: 'full'},
    { path: 'signin', component: SigninComponent,},
    { path: 'contact', component: ContactComponent, canActivate: [guardGuard] },
    { path: 'parent', component: ParentBehaviourComponent,},
    { path: 'template', component: TempdrivenComponent,},
    { path: 'assign', component: AssignformComponent,},
    { path: 'reactive', component: ReactiveComponent,},
    { path: 'reactsignin', component: ReactivesigninComponent,},
    { path: 'reactdash/:id', component: ReactivedashboardComponent,canActivate: [guardGuard] },
    // { path: 'reactdash', component: ReactivedashboardComponent,canActivate: [guardGuard] },
    // { path: 'dashboard', component: GuardashboardComponent,canActivate: [guardGuard] },

    { path: 'parentprompt', component: ParentpromptComponent,},
    { path: 'material', component: MaterialComponent,},
    { path: 'database', component: DatabasedComponent,},





    { path: 'todo', component: TodoComponent,},







    { path: 'products', children: [
     { path: '', component: ProductsComponent, title: 'Products' },
        { path: 'groceries', title: 'Groceries', children: [
            { path: '', component: GroceriesComponent, title: 'Groceries' },
            { path: ':id', component: DisplayGroceryComponent, title: 'Groceries' },   //parameterized or dynamic routing
        ]},
        {path: 'clothes', component: ClothesComponent},
        {path: 'appliances', component: AppliancesComponent},
    
    ] }, 
    {path: 'user', component: UserComponent},

    {path: '**', component:  PageNotfoundComponent,}, 
];
