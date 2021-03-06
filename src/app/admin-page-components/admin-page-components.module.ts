import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTableComponent } from './user-table/user-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { EditableComponentsModule } from './editable-components/editable-components.module';
import { PuzzleTableComponent } from './puzzle-table/puzzle-table.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    UserTableComponent,
    DeleteDialogComponent,
    PuzzleTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    EditableComponentsModule,
    DragDropModule
  ],
  exports: [
    UserTableComponent,
    DeleteDialogComponent,
    PuzzleTableComponent
  ]
})
export class AdminPageComponentsModule { }
