import { Component } from '@angular/core';
import { TranslateService } from 'ngx-deepl';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'ngx-migrate-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'default';
  constructor(private translation: TranslateService) {
    this.changeTitle();
  }

  async changeTitle() {
    await firstValueFrom(
      this.translation.translate('This is a new title', 'FR')
    );
  }
}
