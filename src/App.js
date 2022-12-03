import './App.css';
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer'
import { Main } from './components/Main'

function App() {
  // acá se escribe javascript vainilla
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
      {/* los componentes se cierran a sí mismos */}
    </>
  );
}
// en el return () se escribe JSX
export default App;
