import './App.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';


function App() {
  return (
    <div className="App">
      <div className="header-wrap">
        <Header />
      </div>
      <div className="side-page-wrap">
        <Sidebar />      
        <MainContent />
      </div>
    </div>
  );
}

export default App;
