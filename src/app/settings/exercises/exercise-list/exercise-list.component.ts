import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {Exercise} from '../exercise.model';
import * as fromExercise from '../store/exercise.reducer';
import * as ExerciseActions from '../store/exercise.actions';
import {ExerciseEditComponent} from '../exercise-edit/exercise-edit.component';

@Component({
  selector: 'rr-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit, OnDestroy, AfterViewInit {

  private subscription: Subscription;

  displayedColumns: string[] = ['name', 'equipment', 'actions'];
  dataSource = new MatTableDataSource<Exercise>();

  @ViewChild('paginator', { static: false }) paginator: MatPaginator;

  ngOnInit(): void {
    this.subscription = this.store.select(fromExercise.getExercises)
      .subscribe(exercises => {
        this.dataSource.data = exercises;
      });
    this.store.dispatch(ExerciseActions.loadExercises());
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  addExerciseClicked() {
    const dialogRef = this.editDialog.open(ExerciseEditComponent, { data: { exercise: {} as Exercise, editMode: false }});
    dialogRef.afterClosed().subscribe(exercise => {
      this.store.dispatch(ExerciseActions.addExercise({ exercise }));
    });
  }

  deleteClicked(id: string) {
    this.store.dispatch(ExerciseActions.deleteExercise({ id }));
  }

  constructor(private store: Store<fromExercise.State>,
              private editDialog: MatDialog) { }
}
