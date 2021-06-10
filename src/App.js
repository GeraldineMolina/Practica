import logo from './utils/images/logo.png';
import './App.css';
import Todo from './components/Todo';
import Cuerpo from './components/Cuerpo';
import Footer from './components/Footer';

function App(){
  return (
    <div className="App">
      <Todo /> 
      <Cuerpo />
      <Footer />
    </div>
  );
}  

export default App;
