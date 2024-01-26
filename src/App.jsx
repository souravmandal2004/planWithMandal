import { useState } from 'react'
import data from './data.js';
import Tours from './Components/Tours'; // Correct path and file extension

function App() {
  const [tours, setTours] = useState (data);

  function removeTour (id) {
    const newTours = tours.filter (tour => tour.id !== id); 
    setTours (newTours);
  }

  if (tours.length === 0) {
    return (
      <div className='refresh'>
        <h2 className='no-tours-left'>No Tours Left</h2>

        <button className='button-89' onClick={() => setTours(data)}>Refresh Content</button>
      </div>
    );
  }

  return (
    <>
      <div>
        <Tours tours={tours} removeTour={removeTour}/>
      </div>
    </>
  )
}

export default App
