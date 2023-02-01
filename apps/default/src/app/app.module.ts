import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDeepLModule } from 'ngx-deepl';

import { KEY } from './.secret';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    NgxDeepLModule.forRoot({
      apiSecret: KEY,
      api: 'api-free.deepl.com',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
