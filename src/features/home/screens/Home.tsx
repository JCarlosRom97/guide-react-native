import { useEffect } from 'react';
import {exercises}  from '../../../data/exercises.json';
import { ExerciseList } from '../components/ExercisesList';
import { requireNativeModule } from 'expo-modules-core';
//import MyNativeModule from 'my-native-module';


export const Home = () => {
/*   const message = MyNativeModule.sayHello("José");
  console.log(message); */

  return (
    <>
      <ExerciseList list={exercises} />
    </>

  );
}
