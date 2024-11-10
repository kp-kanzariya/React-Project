// import React, { useState, useEffect } from "react";

// const Facto = () => {
//   const [filteredNumbers, setFilteredNumbers] = useState([]);

//   useEffect(() => {
//     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     const filtered = numbers.filter((num) => num >= 1 && num <= 5);
//     setFilteredNumbers(filtered);
//   }, []);

//   return (
//     <div>
//       <h3>Numbers from 1 to 5</h3>
//       <ul>
//         {filteredNumbers.map((num, index) => (
//           <li key={index}>{num}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };



// export default Facto;

import React, { useState, useEffect } from 'react';

function Facto()  {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const generateNumbers = () => {
      const result = [];
      for (let i = 1; i <= 5; i++) {
        result.push(i);
      }
      setNumbers(result);
    };

    generateNumbers();
  }, []);

  return (
    <div>
      <h3>Numbers from 1 to 5</h3>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default Facto;
