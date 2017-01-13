import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyComponent } from './my-component.component';

@NgModule({
    declarations: [MyComponent],
    exports: [MyComponent]
})
export class MyComponentModule { }