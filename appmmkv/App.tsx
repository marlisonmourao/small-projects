import { StatusBar } from 'react-native';
import Signin from './src/Signin';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
      <Signin />
    </>
  );
}