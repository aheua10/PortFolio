import './App.scss';
import Header from './Components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import ContactMe from './Components/ContactMe/ContactMe';
import { MenuBar } from './Components/MenuBar/MenuBar';

const App = () => {
  return (
    <>
    <div className='header-container'>
    <Header /></div>
    <MenuBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/ContactMe' component={ContactMe}/>
    </Switch>
    </>
  );
}

export default App;
