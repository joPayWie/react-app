import './App.css';
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer'
import { Main } from './components/Main'
import { Button } from './components/Button'
import './components/Button2'
import Button2 from './components/Button2';
// import { Button3, Button4 } from "./components/Button3/Button3";


function App() {
  // acá se escribe javascript vainilla
  return (
    <>  
    {/* ESTOS PIQUITOS SIRVEn TIPO DIV CONTENEDOR (FRAGMENT) */}
      <Navbar />
      <Main />
        <div className="card">
          <Button bgColor="#c2c2c2" text={"I'm a button"} num={2+2} /> 
          <Button2 /> 
        </div>
      <Footer />
      {/* los componentes se cierran a sí mismos */}
    </>
  );
}
// en el return () se escribe JSX
export default App;
