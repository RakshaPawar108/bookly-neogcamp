import "./App.css";
import { useState } from "react";

const database = {
  Thrillers: [
    {
      name: "The Da Vinci Code",
      author: "Dan Brown",
      description:
        "A quest almost as old as time itself. An object thought lost forever. A deadly race to posess it.",
      rating: "5/5",
    },
    {
      name: "One of Us is Lying",
      author: "Karen McManus",
      description:
        "Five students walk into detention, only four leave alive. Everyone has secrets, right? What really matters is how far you'll go to protect them.",
      rating: "3.5/5",
    },
    {
      name: "The Girl on The Train",
      author: "Paula Hawkins",
      description: "You don't know her, but she knows you.",
      rating: "4.5/5",
    },
  ],
  Emotional: [
    {
      name: "The Fault in Our Stars",
      author: "John Green",
      description:
        "Join Hazel and Augustus in their search for love and life amidst battling terminal cancer.",
      rating: "4.5/5",
    },
    {
      name: "My Sister's Keeper",
      author: "Jodi Picoult",
      description:
        "If you use one of your children to save the life of another, are you being a good mother or a very bad one?",
      rating: "5/5",
    },
  ],
  Anthologies: [
    {
      name: "Eden of Memories",
      author: "Suchismita Ghoshal",
      description:
        "An anthology with some beautiful poems and microtales scribbled by more than 50 immensely outstanding authors from all over India as well as abroad",
      rating: "3.5/5",
    },
    {
      name: "Velocity of Thoughts",
      author: "Taruna Gambhir",
      description:
        "An anthology of thoughts stunningly penned down by writers which readers will find enthralling.",
      rating: "3/5",
    },
  ],
  AudioBooks: [
    {
      name: "Sadie",
      author: "Courtney Summers",
      description:
        "An innovative audiobook featuring more than 30 voices. Sadie explores the depth of a sister's love - poised to be the next story listeners won't be able to pause.",
      rating: "5/5",
    },
  ],
};

function App() {
  const [genre, setGenre] = useState("Thrillers");
  function clickedHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> 📚 bookly </h1>
      <p>
        Check out some of my favourite books sorted by genre. These are some
        amazing recommendations from my bookshelf. Hope you like them! ❤
      </p>

      <div id="genres">
        {Object.keys(database).map((item, idx) => (
          <div className="genre" onClick={() => clickedHandler(item)} key={idx}>
            {item}
          </div>
        ))}
      </div>
      <div id="recomms">
        <ul>
          {database[genre].map((item, idx) => (
            <li key={idx}>
              <div>
                {item.name} - {item.author}
              </div>
              <small>Description: {item.description}</small>
              <p>Rating: {item.rating} ⭐</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
