import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {Exercise} from '../exercise.model';
import * as fromApp from '../../../store/app.reducer';
import * as fromExercise from '../store/exercise.reducer';
import * as ExerciseActions from '../store/exercise.actions';
import {map} from 'rxjs/operators';

@Component({
  selector: 'rr-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  displayedColumns: string[] = ['name', 'machineCode', 'actions'];
  dataSource = new MatTableDataSource<Exercise>();

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    console.log('ex list init');
    this.subscription = this.store
      .select(fromExercise.getExercises)
      .subscribe(exercise => {
        this.dataSource.data = exercise;
      });
    this.store.dispatch(ExerciseActions.loadExercises());
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
