import './App.css';
import Routes from './Routes';
import LanguageIcon from '@material-ui/icons/Language';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="float-left">
          <a className="logo" href="/">
            LoanAid.AI
          </a>
        </div>
        <div className="float-right">
          <button className="btn btn-green">LOGIN</button>
          <LanguageIcon className="mr-2" /> 
          <span className="mr-5"> En </span>
        </div>
      </div>
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
