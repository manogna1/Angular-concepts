import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { EmployeesComponent } from './employees/components/employees.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CpbComponent } from './concepts/components/cpb/cpb.component';
import { CebComponent } from './concepts/components/ceb/ceb.component';
import { ColorizerDirective } from './concepts/directives/colorizer.directive';
import { AddEmployeeComponent } from './employees/components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employees/components/employee-details/employee-details.component';
import { EmployeesModule } from './employees/employees.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductsModule } from './products/products.module';
import { LoginComponent } from './auth/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    EmployeesComponent,
    AboutComponent,
    CpbComponent,
    CebComponent,
    ColorizerDirective,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    ReactiveFormsModule,HttpClientModule,
    EmployeesModule,
    ProductsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
