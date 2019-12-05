import {TrainingExercise} from './training-exercise.model';

export interface TrainingPlan {
  id: number;
  name: string;
  type: string; // mass-building, reduction
  exercises: TrainingExercise[];
}
