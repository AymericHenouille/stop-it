import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { MatModule } from './mat/mat.module';

/**
 * The modules contained by the shared module.
 */
const MODULES: (Type<unknown> | ModuleWithProviders<unknown>)[] = [
  CommonModule,
  MatModule,
];

/**
 * The shared module of the app.
 */
@NgModule({
  imports: [MODULES],
  exports: [MODULES],
})
export class SharedModule { }
