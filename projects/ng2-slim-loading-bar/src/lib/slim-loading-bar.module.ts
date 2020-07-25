import { NgModule, ModuleWithProviders } from "@angular/core";

import { SlimLoadingBarComponent } from './slim-loading-bar.component';
import { SlimLoadingBarService } from './slim-loading-bar.service';

export * from './slim-loading-bar.component';
export * from './slim-loading-bar.service';

@NgModule({
    declarations: [SlimLoadingBarComponent],
    exports: [SlimLoadingBarComponent],
    providers: [SlimLoadingBarService]
})
export class SlimLoadingBarModule {
    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: SlimLoadingBarModule,
            providers: [SlimLoadingBarService]
        };
    }
}
