import './App.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';


function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />      
      <MainContent />
    </div>
  );
}

export default App;
