import './App.css';
import Todo from './components/Todo';
import Cuerpo from './components/Cuerpo';
import Footer from './components/Footer';
import GlobalStyles from './globalStyles';
import Title from './components/Title'; 

function App(){
  return (
    <div className="App">
      <GlobalStyles />
      <Title />
      <Todo /> 
      <Cuerpo />
      <Footer />
    </div>
  );
}  

export default App;
