import { Provider } from 'react-redux';
import './App.css'
import zipy from "zipyai";
import CakeContainer from './ReduxComponent/CakeContainer'
import store from './redux/store';
import HooksCakeContainer from './ReduxComponent/HooksCakeContainer';
import IceCreamContainer from './ReduxComponent/iceCreamContainer';
import NewCakeContainer from './ReduxComponent/NewCakeContainer';
import ItemContainer from './ReduxComponent/ItemContainer';
import UserContainer from './ReduxComponent/UserContainer';
zipy.init('c0e9302d');

function App() {
  return (
    <Provider store={store}>
    <div className='p-[20px]'>
      {/* Nav Bar */}
 
      <ItemContainer cake />
      <ItemContainer />
      <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
      <NewCakeContainer />
      <UserContainer />
    </div>
    </Provider>
  )
}

export default App
