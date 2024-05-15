import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule as NgrxStoreModule } from '@ngrx/store';

/**
 * The modules contained by the store module.
 */
const MODULES: (Type<unknown> | ModuleWithProviders<unknown>)[] = [
  NgrxStoreModule.forRoot({}, {}),
  EffectsModule.forRoot([])
];

/**
 * The store module of the app.
 */
@NgModule({
  imports: [MODULES],
  exports: [MODULES],
})
export class StoreModule { }
