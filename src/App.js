import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
