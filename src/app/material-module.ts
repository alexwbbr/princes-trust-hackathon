import {NgModule} from '@angular/core';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule, MatInputModule,
  MatProgressBarModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

const materialComp = [
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatDividerModule,
  MatProgressBarModule,
  MatTabsModule,
  MatExpansionModule,
  MatInputModule,
  MatButtonModule,
  MatBadgeModule
];

@NgModule({
  imports: [...materialComp],
  exports: [...materialComp]
})
export class MaterialModule {
}
