import './reset.css';
import './App.css';
import { Header } from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
