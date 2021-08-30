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
    {
      name: "Harry Potter Series",
      author: "J.K. Rowling",
      description:
        "Join Harry Potter and his friends into the world of magic while studying in Hogwarts School or WitchCraft and Wizardry and finding friendship and love on the way while fighting an evil wizard.",
      rating: "5/5",
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
    {
      name: "A Thousand Splendid Suns",
      author: "Khaled Hosseini",
      description:
        "Mariam, an illegitimate teenager from Herat, is forced to marry a shoemaker from Kabul after a family tragedy.",
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
    {
      name: "My Favourite Nature Stories",
      author: "Ruskin Bond",
      description: "A beautiful collection of short stories from his life. ",
      rating: "4.4/5",
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
    {
      name: "Kaali Awaazein",
      author: "Mishkka Singh Shekhawat",
      description:
        "A 10 episode fictional series from Audible starring Amitabh Bachchan, written and directed by Mantra.",
      rating: "3/5",
    },
    {
      name: "The Extraordinary Adventures of Arsene Lupin",
      author: "Maurice Leblanc",
      description:
        "Take Arsene's adventures for a whirl, and witness how he measures up when he goes toe to toe with the redoubtable Sherlock Holmes himself.",
      rating: "4/5",
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
