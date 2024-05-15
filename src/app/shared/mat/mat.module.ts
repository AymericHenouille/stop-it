import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

/**
 * The material module of the app.
 */
const MODULES: (Type<unknown> | ModuleWithProviders<unknown>)[] = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
];

/**
 * The material module for the app.
 */
@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class MatModule { }
