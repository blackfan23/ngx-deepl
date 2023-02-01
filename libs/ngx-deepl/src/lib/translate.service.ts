import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { DeeplConfig, DEEPL_CONFIG } from './config';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private baseUrl = `https://${this.config.api}/v2/translate`;

  private httpOptions = {
    headers: new HttpHeaders({
      Authorization: `DeepL-Auth-Key ${this.config.apiSecret}`,
    }),
  };

  constructor(
    @Inject(DEEPL_CONFIG) public config: DeeplConfig,
    private http: HttpClient
  ) {
    if (!config) {
      throw new Error('No Config provided for NgxDeeplAPI');
    }
  }

  translate(text: string, targetLanguage: string) {
    const data = {
      text: 'Hello, world!',
      target_lang: 'DE',
    };

    return this.http.post(this.baseUrl, data, this.httpOptions);
  }
}
