import { exercises } from '../../../data/exercises.json';
import { ExerciseList } from '../components/ExercisesList';

export const Home = () => {

  return (
    <>
      <ExerciseList list={exercises} />
    </>
  );
}
