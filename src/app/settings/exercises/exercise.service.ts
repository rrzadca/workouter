import {Exercise} from './exercise.model';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class ExerciseService {

  getAll(): Observable<Exercise[]> {
    return of();
  }

  storeDefaultExerises() {
    const arr = [
      { name: 'Legs Press', equipment: 'R12' },
      { name: 'Leg Extension', equipment: 'R13' },
      { name: 'Pulley', equipment: 'R18' },
      { name: 'Diverging Lat Pulldown', equipment: 'R28' },
      { name: 'Diverging Seated Row', equipment: 'R6' },
      { name: 'Pectoral Fly', equipment: 'R1' },
      { name: 'Converging Chest Press', equipment: 'R2' },
      { name: 'Converging Shoulder Press', equipment: 'R4' },
      { name: 'Lateral Raise Dumbells' },
      { name: 'Cable Arm Curl' },
      { name: 'Cable Arm Extension' }
    ];

    for (const exercise of arr) {
      this.db.collection('exercises').add(exercise);
    }
  }


  constructor(private db: AngularFirestore) {}
}
