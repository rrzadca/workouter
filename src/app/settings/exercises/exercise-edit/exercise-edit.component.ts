import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Exercise} from '../exercise.model';

@Component({
  selector: 'rr-exercise-edit',
  templateUrl: './exercise-edit.component.html',
  styleUrls: ['./exercise-edit.component.scss']
})
export class ExerciseEditComponent implements OnInit {

  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { exercise: Exercise, editMode: boolean }) {}

  ngOnInit() {
    this.formInit();
  }

  private formInit() {
    const editedExercise = this.data.editMode ? { ...this.data.exercise } : {} as Exercise;

    this.form = new FormGroup({
      name: new FormControl(editedExercise.name, Validators.required),
      description: new FormControl(editedExercise.description),
      equipment: new FormControl(editedExercise.equipment)
    });
  }

  onSubmit(): void {

  }
}
