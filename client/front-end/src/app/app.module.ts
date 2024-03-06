import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgApexchartsModule } from "ng-apexcharts";
import { ReactiveFormsModule } from '@angular/forms';
import { LineComponent } from './graphical/line/line.component';
import { BarComponent } from './graphical/bar/bar.component';
import { CreateWidgetComponent } from './create-widget/create-widget.component';
import { PieComponent } from './graphical/pie/pie.component';
import { TableComponent } from './graphical/table/table.component';

const config: SocketIoConfig = { url: environment.socketIOUrl, options: {} };
@NgModule({
  declarations: [AppComponent, LineComponent, BarComponent, CreateWidgetComponent, PieComponent, TableComponent],
  imports: [BrowserModule, AppRoutingModule, SocketIoModule.forRoot(config), BrowserAnimationsModule, AccordionModule.forRoot(),NgApexchartsModule,ReactiveFormsModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
