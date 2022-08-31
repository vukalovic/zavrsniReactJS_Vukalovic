import './App.css';
import Search from './components/search/Search';

function App() {

  return (
    <div className="App">
      <div className="body">
        <Search />
        {/* nisam mogla proslijediti state pa sam sve stavila u jednu komponentu */}
      </div>
    </div>
  );
}

export default App;
