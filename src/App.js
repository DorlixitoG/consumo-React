import { Fragment, useState, useEffect } from 'react';
import Compras from './components/Compras';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = () => {
      fetch('http://localhost:3000/api/compras')
        .then(res => res.json())
        .then(res => setBooks(res));
    };

    fetchBooks();
  }, [setBooks]);

  return (
    <Fragment>
      <div>
        <Compras books={books} />
      </div>
    </Fragment>
  );
}

export default App;
