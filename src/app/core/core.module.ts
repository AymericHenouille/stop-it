import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FireModule } from './fire/fire.module';
import { StoreModule } from './store/store.module';

/**
 * The modules contained by the app.
 */
const MODULES: (Type<unknown> | ModuleWithProviders<unknown>)[] = [
  BrowserModule,
  FireModule,
  StoreModule,
];

/**
 * The core module of the app.
 */
@NgModule({
  imports: [MODULES],
  exports: [MODULES],
  providers: [
    provideAnimationsAsync(),
  ]
})
export class CoreModule { }
