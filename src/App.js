import './App.css';
import Notes from './pages/Notes';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <Notes/>
    </DataProvider>
  );
}

export default App;
