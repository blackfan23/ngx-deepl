import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CONFIG_DEFAULT_VALUE, DeeplConfig, DEEPL_CONFIG } from './config';
import { TranslateService } from './translate.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [TranslateService],
})
export class NgxDeepLModule {
  static forRoot(
    config: DeeplConfig = CONFIG_DEFAULT_VALUE,
    @Optional() @SkipSelf() parentModule?: NgxDeepLModule
  ): ModuleWithProviders<NgxDeepLModule> {
    if (parentModule) {
      throw new Error(
        'NgxDeepLModule is already loaded. Import it in the AppRootModule only'
      );
    }

    return {
      ngModule: NgxDeepLModule,
      providers: [{ provide: DEEPL_CONFIG, useValue: config }],
    };
  }
}
