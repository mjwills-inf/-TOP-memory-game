import './App.css';
import Header from './layout/Header'
import Sidebar from './layout/Sidebar'
import Cards from './components/Cards'

import Pictures from './data/data'

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="main-content">
        <Cards />

      </div>
      
    </div>
  );
}

export default App;
