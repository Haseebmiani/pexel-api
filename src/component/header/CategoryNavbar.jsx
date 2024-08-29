// import { Button } from "@mui/icons-material";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const ButtonNavbar = () => {
//   const [selectedButton, setSelectedButton] = useState(null);

//   const handleButtonClick = (buttonNumber) => {
//     setSelectedButton(buttonNumber);
//   };

//   const Button = [
//     { label: "Coding", id: 1 },
//     { label: "Mobile", id: 2 },
//     { label: "Lion", id: 3 },
//     { label: "Laptop", id: 4 },
//   ];
//   return (
//     <>
//       <Link to={`/category/${category.Button}`}>
//         <div className=" justify-self-center text-center mt-11 ">
//           {Button.map((Button) => (
//             <button
//               key={Button.id}
//               onClick={() => handleButtonClick(Button.id)}
//               className={`${
//                 selectedButton === Button.id
//                   ? "bg-black text-white"
//                   : "bg-white"
//               } p-2 m-2 rounded-md `}>
//               {Button.label}
//             </button>
//           ))}
//         </div>
//       </Link>
//     </>
//   );
// };

// export default ButtonNavbar;
