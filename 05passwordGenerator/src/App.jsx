import { useState, useCallback,useEffect,useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charactersAllowed) str += "!@#$%^&*()_+-=[]{}|;:'";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);

    }
   

    setPassword(pass);
  }, [length, numberAllowed, charactersAllowed]);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };
  const copyPasswordToClipboard = useCallback(()=> {
     window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator
  },[length,numberAllowed,charactersAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <h1 className="text-white text-center my-3">Password Generator</h1>
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(parseInt(e.target.value, 10))}
              ref={passwordRef}

            />
            <label>Length: {length}</label>
          </div>
        </div>

        <div className="flex items-center gap-x-2 mt-4">
          <label className="text-white flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
              ref={passwordRef}

            />

            Include Numbers
          </label>

          <label className="text-white flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charactersAllowed}
              onChange={(e) => setCharacterAllowed(e.target.checked)}
            />
            Include Special Characters
          </label>
        </div>

        <button
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
          onClick={passwordGenerator}
        >
          Generate Password
        </button>
      </div>

    </>
  );
}

export default App;
