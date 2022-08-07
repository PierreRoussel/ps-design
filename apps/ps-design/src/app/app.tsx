// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Router } from 'react-router-dom';
import Homepage from '../modules/homepage/homepage';
import MainNavigation from '../modules/main-navigation/main';
import './app.module.scss';

export function App() {
  return (
    <BrowserRouter>
      <MainNavigation/>
      <Homepage/>
    </BrowserRouter>
  );
}

export default App;
