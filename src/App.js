import './App.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';


function App() {
  return (
    <div className="App">
        <Header />
      <div className="page-sub-header">
        <Sidebar />      
        <MainContent />
      </div>
    </div>
  );
}

export default App;
