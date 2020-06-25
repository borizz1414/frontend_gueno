import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//SERVICIOS
import { DniService } from './services/dni.service'

//RUTAS
import { routing, appRoutingProviders } from './app.routing';

//COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, routing],
  providers: [DniService, appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
