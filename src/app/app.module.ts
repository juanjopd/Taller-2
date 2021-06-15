import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FacturaComponent } from "./factura/factura.component";
import { ClienteComponent } from "./cliente/cliente.component";

@NgModule({
  declarations: [AppComponent, FacturaComponent, ClienteComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
