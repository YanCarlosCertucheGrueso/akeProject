import '../src/Styles/appStyle.css';
import Fibo from './Components/Fibo';
import Mult from './Components/Mult';
import Card from './Components/Card';
function App() {
  return (
    <div className="containerApp">
      <Fibo></Fibo>
      <Mult></Mult>
      
      <Card></Card>
    </div>
  );
}

export default App;
