import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {ConsumptionComponent} from './consumption.component';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { ChartsModule, WavesModule } from 'angular-bootstrap-md';

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      BrowserModule,
      BrowserAnimationsModule,
      BrowserAnimationsModule,
      MatRadioModule,
      MatExpansionModule,
      MatDividerModule,
      MatListModule,
      MatCheckboxModule,
      MatSliderModule,
      MatFormFieldModule,
      FormsModule,
      MatInputModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      MatCardModule,
      // ChartsModule,
      // WavesModule,
      // MDBBootstrapModule.forRoot(),
    ],
    declarations: [],
    bootstrap: [ConsumptionComponent]
  })
  export class ConsumptionModule {
    hide = true;
  }
   