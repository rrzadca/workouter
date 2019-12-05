import {Exercise} from '../exercises/exercise.model';

export interface TrainingExercise {
  exercise: Exercise;
  weight: number;
  repeats: number;
  series: number;
}
