
import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';



const DanPage = (props) => {
  return (
    <div>
      <h1>Dan A4 Page</h1>

    </div>
  );
};


function App() {
  return (
    <div>

      <Route exact path='/' component={HomePage} />
      <Route path='/dan' component={DanPage} />


    </div>
  );
}

export default App;
