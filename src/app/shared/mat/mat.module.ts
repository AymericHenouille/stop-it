import { ModuleWithProviders, NgModule, Type } from '@angular/core';

/**
 * The material module of the app.
 */
const MODULES: (Type<unknown> | ModuleWithProviders<unknown>)[] = [

];

/**
 * The material module for the app.
 */
@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class MatModule { }
