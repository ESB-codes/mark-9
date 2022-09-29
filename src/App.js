import "./styles.css";
import React from "react";
import { useState } from "react";

const Songs = {
  SidhuMooseWala: [
    {
      song: "295",
      rating: "4.5/5",
      link: "https://www.youtube.com/watch?v=n_FCrCQ6-bA"
    },
    {
      song: "Old Skool",
      rating: "4/5",
      link: "https://www.youtube.com/watch?v=hBlO1i_WTiY"
    }
  ],
  Diljit: [
    {
      song: "5 tara",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=K69eSKsaNb4"
    },
    {
      song: "peed",
      rating: "4/5",
      link: "https://www.youtube.com/watch?v=cXUndHRKmXQ"
    }
  ],

  APDhillon: [
    {
      song: "brown munde",
      rating: "4.5/5",
      link: "https://www.youtube.com/watch?v=VNs_cCtdbPc"
    },
    {
      song: "Insane",
      rating: "4/5",
      link: "https://www.youtube.com/watch?v=cqP8I5aaud8"
    }
  ]
};
// creating an array to display singers on the button
let songsArr = Object.keys(Songs);

export default function App() {
  // creating state so as to change the singers on view
  let [meaning, setter] = useState("SidhuMooseWala");

  function changeEvent(event) {
    console.log(event);
    setter(event);
  }
  return (
    <div className="App">
      <h1>Punjabi Song Recommendation</h1>
      <h3>Checkout my favorite songs</h3>
      <div>
        {songsArr.map((x) => {
          return (
            <button class="singers" onClick={() => changeEvent(x)}>
              {x}
            </button>
          );
        })}
      </div>
      <hr />

      <div>
        {Songs[meaning].map((x) => {
          return (
            <ul className="view">
              <li className="name">{x.song}</li>
              <li>{x.rating}</li>
              <a
                className="yt"
                href="https://www.youtube.com/watch?v=n_FCrCQ6-bA"
              >
                Listen
              </a>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
