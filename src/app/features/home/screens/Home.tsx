import { exercisesJson } from '../../../data/exercises';
import { ExerciseList } from '../components/ExercisesList';
export const Home = () => {

  return (
    <>
      <ExerciseList list={exercisesJson} />
    </>

  );
}
