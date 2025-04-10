import React, { useState } from 'react';
import MovieList from './components/MovieList/MovieList';
import Filter from './components/Filter/Filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterURL: 'https://via.placeholder.com/300x450?text=Inception',
      rating: 8.8
    },
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://via.placeholder.com/300x450?text=Shawshank',
      rating: 9.3
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL: 'https://via.placeholder.com/300x450?text=Dark+Knight',
      rating: 9.0
    }
  ]);


  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState(0);

 
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  
  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
    );
  });


  const handleAddMovie = (e) => {
    e.preventDefault();
    if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.rating) {
      setMovies([...movies, {
        ...newMovie,
        rating: parseFloat(newMovie.rating)
      }]);
      setNewMovie({
        title: '',
        description: '',
        posterURL: '',
        rating: ''
      });
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: value
    });
  };

  return (
    <div className="app">
      <h1>My Movie App</h1>
      
      <Filter
        titleFilter={titleFilter}
        rateFilter={rateFilter}
        onTitleChange={setTitleFilter}
        onRateChange={(value) => setRateFilter(Number(value))}
      />
      
      <MovieList movies={filteredMovies} />
      
      <div className="add-movie">
        <h2>Add New Movie</h2>
        <form onSubmit={handleAddMovie}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newMovie.title}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newMovie.description}
            onChange={handleInputChange}
            required
          />
          <input
            type="url"
            name="posterURL"
            placeholder="Poster URL"
            value={newMovie.posterURL}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating (1-10)"
            min="1"
            max="10"
            step="0.1"
            value={newMovie.rating}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Add Movie</button>
        </form>
      </div>
    </div>
  );
};

export default App;