import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Todos from '../Components/todo-list/Todos';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Hola</div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

