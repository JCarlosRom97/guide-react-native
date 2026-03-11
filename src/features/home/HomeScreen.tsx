import { exercisesReactHooks } from '../../data/mocks/exercisesReactHooks';
import { exercisesReactWeb } from '../../data/mocks/exercisesReactWeb';
import { ExerciseList } from '../counter/ExercisesList';
import { TextComponent } from '../../components/Text/TextComponent';

export const Home = () => {

  return (
    <>
      <TextComponent title='React Core' />
      <ExerciseList list={exercisesReactHooks} />
      <TextComponent title='React Web' />
      <ExerciseList list={exercisesReactWeb} />
    </>
  );
}
