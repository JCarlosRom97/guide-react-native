import { exercisesReactHooks } from '../../../data/exercisesReactHooks';
import { exercisesReactWeb } from '../../../data/exercisesReactWeb';
import { ExerciseList } from '../components/ExercisesList';
import { TextComponent } from '../../../components/Text/TextComponent';

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
