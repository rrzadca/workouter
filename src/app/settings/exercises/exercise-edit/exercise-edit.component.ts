import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Exercise} from '../exercise.model';
import {Store} from '@ngrx/store';
import * as fromExercise from '../store/exercise.reducer';
import * as ExerciseActions from '../store/exercise.actions';

@Component({
  selector: 'rr-exercise-edit',
  templateUrl: './exercise-edit.component.html',
  styleUrls: ['./exercise-edit.component.scss']
})
export class ExerciseEditComponent implements OnInit {

  private editedExercise: Exercise;

  form: FormGroup;

  ngOnInit() {
    this.formInit();
  }

  onSubmit(): void {
    const exercise: Exercise = {
      ...this.editedExercise,
      name: this.form.value.name,
      description: this.form.value.description,
      equipment: this.form.value.equipment
    };

    this.dialogRef.close(this.form.value as Exercise);
  }

  private formInit() {
    this.editedExercise = this.data.editMode ? { ...this.data.exercise } : {} as Exercise;

    this.form = new FormGroup({
      name: new FormControl(this.editedExercise.name, Validators.required),
      description: new FormControl(this.editedExercise.description),
      equipment: new FormControl(this.editedExercise.equipment)
    });
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: { exercise: Exercise, editMode: boolean },
              private store: Store<fromExercise.State>,
              private dialogRef: MatDialogRef<ExerciseEditComponent>) {}
}
