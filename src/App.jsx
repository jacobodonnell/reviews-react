import { useState, useEffect } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPerson = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = people.length - 1;
    }
    setIndex(newIndex);
  };

  const nextPerson = () => {
    let newIndex = index + 1;
    if (newIndex > people.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };

  const randomPerson = () => {
    setIndex(currIndex => {
      let newIndex = -1;
      do {
        newIndex = Math.floor(Math.random() * people.length);
      } while (newIndex === currIndex);
      return newIndex;
    });
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job"> {job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={randomPerson}
        >
          Surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
