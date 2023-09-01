import React, { useState } from 'react';

const Rng = () => {
  // Step 2: Define a state variable to store the random number
  const [randomNumber, setRandomNumber] = useState(null);

  // Step 3: Implement a function to generate a random number and update the state
  const generateRandomNumber = () => {
    const min = 1; // Minimum value for the random number
    const max = 100; // Maximum value for the random number
    const random = Math.floor(Math.random() * (max - min + 1)) + min;

    // Update the state with the generated random number
    setRandomNumber(random);
  };

  return (
    <div>
      <h1>Random Number Generator from iamabdur</h1>
      <button onClick={generateRandomNumber}>Generate Random Numbers</button>
      {randomNumber !== null && <p>Random Number: {randomNumber}</p>}
    </div>
  );
};

export default Rng;
