import { ModuleWithProviders, NgModule, Type, isDevMode } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule as NgrxStoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/**
 * The modules contained by the store module.
 */
const MODULES: (Type<unknown> | ModuleWithProviders<unknown>)[] = [
  NgrxStoreModule.forRoot({}, {}),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: !isDevMode(),
    autoPause: true,
    trace: false,
    traceLimit: 75,
    connectInZone: true,
  })
];

/**
 * The store module of the app.
 */
@NgModule({
  imports: [MODULES],
  exports: [MODULES],
})
export class StoreModule { }
