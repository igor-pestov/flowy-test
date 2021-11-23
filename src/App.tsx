
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Blocks from './Blocks/Blocks';
import MainArea from './MainArea/MainArea';

import './App.css';

function App() {
  const PETS = [
    { id: 1, name: 'dog' },
    { id: 2, name: 'cat' },
    { id: 3, name: 'fish' },
    { id: 4, name: 'hamster' },
]
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Blocks  list={PETS}/>
        <MainArea />
      </DndProvider>

    </div>
  );
}

export default App;
