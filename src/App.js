import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import{originals, actions} from  "./urls"

function App() {
  return (
    <div>
      < NavBar />
      < Banner />
      < RowPost url={originals} title='Netflix Originals'/>
      < RowPost url={actions} title='Action' isSmall/>

    </div>
  );
}

export default App;
