import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { SimpleNotificationsModule } from 'angular2-notifications';
import { RouterModule, Routes } from '@angular/router'


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { FileChooserDirective } from './common/file-chooser.directive';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CategoryComponent,
    FileChooserDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
