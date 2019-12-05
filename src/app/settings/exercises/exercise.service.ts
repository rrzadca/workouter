import {Exercise} from './exercise.model';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ExerciseService {
  getAll(): Observable<Exercise[]> {
    return of([
      { id: 1, name: 'Legs Press', machineCode: 'R12' } as Exercise,
      { id: 2, name: 'Leg Extension', machineCode: 'R13' } as Exercise,
      { id: 3, name: 'Pulley', machineCode: 'R18' } as Exercise,
      { id: 4, name: 'Diverging Lat Pulldown', machineCode: 'R28' } as Exercise,
      { id: 5, name: 'Diverging Seated Row', machineCode: 'R6' } as Exercise,
      { id: 6, name: 'Pectoral Fly', machineCode: 'R1' } as Exercise,
      { id: 7, name: 'Converging Chest Press', machineCode: 'R2' } as Exercise,
      { id: 8, name: 'Converging Shoulder Press', machineCode: 'R4' } as Exercise,
      { id: 9, name: 'Lateral Raise Dumbells' } as Exercise,
      { id: 10, name: 'Cable Arm Curl' } as Exercise,
      { id: 11, name: 'Cable Arm Extension' } as Exercise
    ]);
  }
}
