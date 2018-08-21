import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';

const materialModule = [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
];

@NgModule({
    imports: materialModule,
    exports: materialModule
})
export class AppMaterialModule { }
