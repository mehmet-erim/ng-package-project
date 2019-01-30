import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxxValidateComponent } from './ngxx-validate.component';

@NgModule({
  declarations: [NgxxValidateComponent],
  imports: [],
  exports: [NgxxValidateComponent],
})
export class NgxxValidateModule {
  public static forRoot(config): ModuleWithProviders {
    return { ngModule: NgxxValidateModule, providers: [{ provide: 'config', useValue: config }] };
  }
}
