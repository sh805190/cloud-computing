import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SubmitoneComponent } from './submitone/submitone.component';
import { SubmittwoComponent } from './submittwo/submittwo.component';
// import { CommonModule } from '@angular/common';
// import { re_AppRoutingModule } from './shared/routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubmitoneComponent,
    SubmittwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    // CommonModule,
    // re_AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
