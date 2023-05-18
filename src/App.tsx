import { useState } from "react";

import "./App.css";

function App() {
  // const [darkMode, setDarkMode] = useState(true);

  const [length, setLength] = useState(8);
  const [useLetters, setUseLetters] = useState(false);
  const [useLettersCapitalized, setUseLettersCapitalized] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSpecialCharacters, setUseSpecialCharacters] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetCapitalized = alphabet.toUpperCase();
  const numbers = "1234567890";
  const specialChars = `'~!@#$%^&*()_+{}[]:";'<,>.?/`;

  function generatePassword() {
    const useArr = [];
    const passwordBuilder: string | string[] = [];

    if (useLetters) {
      useArr.push(alphabet);
      passwordBuilder.push(
        alphabet[Math.floor(Math.random() * alphabet.length)]
      );
    }
    if (useLettersCapitalized) {
      useArr.push(alphabetCapitalized);
      passwordBuilder.push(
        alphabetCapitalized[
          Math.floor(Math.random() * alphabetCapitalized.length)
        ]
      );
    }
    if (useNumbers) {
      useArr.push(numbers);
      passwordBuilder.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
    if (useSpecialCharacters) {
      useArr.push(specialChars);
      passwordBuilder.push(
        specialChars[Math.floor(Math.random() * specialChars.length)]
      );
    }

    // console.log(Math.floor(Math.random() * useArr.length));

    for (let i = passwordBuilder.length; i < length; i++) {
      const randomSelectArr: string[] =
        useArr[Math.floor(Math.random() * useArr.length)].split("");

      passwordBuilder.push(
        randomSelectArr[Math.floor(Math.random() * randomSelectArr.length)]
      );
    }

    setGeneratedPassword(
      passwordBuilder.sort(() => 0.5 - Math.random()).join("")
    );
  }

  // function handleModeChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setDarkMode(e.target.checked);
  //   console.log("Darkmode enabled: ", darkMode);
  // }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setLength(Number(e.target.value));
  }

  function handleCheckbox(
    e: React.ChangeEvent<HTMLInputElement>,
    checkbox: boolean,
    checkboxFunction: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    console.log(e.target.checked);
    checkboxFunction(!checkbox);
  }

  return (
    <>
      {/* <div className="modeSwitch">
        <label className="switch">
          <input
            checked={darkMode}
            onChange={(e) => {
              handleModeChange(e);
            }}
            type="checkbox"
          ></input>

          <span className="slider round"></span>
        </label>
      </div> */}

      <h1 className="title">Password Generator</h1>
      <p>Built with TypeScript & React!</p>
      <div className="container">
        <div className="leftDiv">
          <ul style={{}}>
            <li>
              <input
                checked={useLetters}
                onChange={(e) => handleCheckbox(e, useLetters, setUseLetters)}
                type="checkbox"
              ></input>

              <label>Lowercase (a-z)</label>
              <br />
            </li>
            <li>
              <input
                checked={useLettersCapitalized}
                onChange={(e) =>
                  handleCheckbox(
                    e,
                    useLettersCapitalized,
                    setUseLettersCapitalized
                  )
                }
                type="checkbox"
              ></input>

              <label>Uppercase (A-Z)</label>
              <br />
            </li>

            <li>
              <input
                checked={useNumbers}
                onChange={(e) => handleCheckbox(e, useNumbers, setUseNumbers)}
                type="checkbox"
              ></input>
              <label>Numbers</label>
              <br />
            </li>
            <li>
              <input
                checked={useSpecialCharacters}
                onChange={(e) =>
                  handleCheckbox(
                    e,
                    useSpecialCharacters,
                    setUseSpecialCharacters
                  )
                }
                type="checkbox"
              ></input>
              <label>Special Characters</label>
              <br />
            </li>
          </ul>
        </div>
        <div className="rightDiv">
          <ul>
            <li>
              <label>Password Length ({length})</label>
              <br />
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                min="8"
                max="50"
                placeholder="8"
                type="range"
              ></input>
            </li>
          </ul>
        </div>
      </div>
      <button onClick={generatePassword}>Generate</button>

      <br />
      <br />
      <br />

      {generatedPassword}
    </>
  );
}

export default App;
