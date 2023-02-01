import { InjectionToken } from '@angular/core';

export const DEEPL_CONFIG = new InjectionToken<DeeplConfig>('DeeplConfigToken');

export const CONFIG_DEFAULT_VALUE: DeeplConfig = {
  apiSecret: '',
  api: 'api-free.deepl.com',
};

export interface DeeplConfig {
  apiSecret: string;
  api: string;
}
