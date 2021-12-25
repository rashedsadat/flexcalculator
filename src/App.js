import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
