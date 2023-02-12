import './App.css';
import { useState } from 'react';
import About from './components/About';
import Books from './components/Books';
import Header from './components/Header';
import axios from 'axios';

function App() {
  const [emotional, setEmotional] = useState(false);
  const [job, setJob] = useState('comedian');
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url =
      process.env.REACT_APP_BACKEND +
      'books/' +
      `${emotional ? '1/' : '0/'}${job === 'comedian' ? '1/' : '0/'}${
        job === 'defense' ? '1/' : '0/'
      }${job === 'investigator' ? '1/' : '0/'}`;

    try {
      const res = await axios.get(url);
      setBooks(res.data);
    } catch (e) {
      // some error handling would go here
      console.error('an error has occured');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative App mx-auto max-w-[1500px]">
      <Header />
      <About
        emotional={emotional}
        setEmotional={setEmotional}
        job={job}
        setJob={setJob}
        submit={submit}
      />
      <Books books={books} loading={loading} />
    </div>
  );
}

export default App;
