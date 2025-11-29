
import { Provider } from 'react-redux';
import './app.css'
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';



function App(){
  return (
    <div>
     <Provider  store={appStore}>
           <Header />
          <Outlet/>  
     </Provider> 
    </div>
    
  )
}
import appStore from './utils/appStore';

export default App
