import { NgModule, isDevMode } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/**
 * The root module of the app.
 */
@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    PagesModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
