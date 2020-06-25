import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, BodyComponent, FooterComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
