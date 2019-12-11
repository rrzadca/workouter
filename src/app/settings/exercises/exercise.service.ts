import {Exercise} from './exercise.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {fromPromise} from 'rxjs/internal-compatibility';

@Injectable({ providedIn: 'root' })
export class ExerciseService {

  getAll(): Observable<Exercise[]> {
    return this.db
      .collection('exercises')
      .stateChanges()
      .pipe(
        map(dataArr => {
          return dataArr.map(item => {
            return {
              id: item.payload.doc.id,
              ...item.payload.doc.data()
            } as Exercise;
          });
        })
      );
  }

  addExercise(exercise: Exercise): Observable<string> {
    return fromPromise(this.db.collection('exercises').add(exercise))
      .pipe(
        map((response: DocumentReference) => {
          return response.id;
        })
      );
  }

  deleteExercise(id): Observable<string> {
    return fromPromise(this.db.collection('exercise').doc(id).delete()).pipe(map(() => id));
  }

  constructor(private db: AngularFirestore) {}
}
