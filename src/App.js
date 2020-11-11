import './App.css';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Cards from './components/Cards';

import { pictures } from './data/data';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      
      <div className="main-content">
        
        {pictures.map((item) =>                
          
           <Cards
              key={item.id} 
              name={item.name}
              src={item.src}
           />
               
        )}
        

      </div>
      
    </div>
  );
}

export default App;
