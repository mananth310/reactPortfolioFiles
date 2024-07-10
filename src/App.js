import './App.css';
import { Header } from './component/Header';
import { Home } from './component/home';
import { About } from './component/About';
import { Project } from './component/Project';
import { Contact } from './component/Contact';
import { Footer } from './component/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
