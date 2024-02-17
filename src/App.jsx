import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Nav from "./components/Nav.jsx"
import Users from "./pages/Users.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users/:id" element={<Users />}></Route>
      </Routes>
    </Router>
  );
}

export default App;


// import "./App.css";
// import Todo from "./components/Todo.jsx";
// import Title from "./components/Title.jsx";
// import Modal from "./components/Modal.jsx";
// import Counter from "./components/Counter.jsx";
// import React, { useEffect, useState } from "react";

// function App() {
//   const [showModal, setShowModal] = useState(false);

//   function onToDoDelete() {
//     setShowModal(true);
//     console.log("onToDoDelete()");
//   }

//   function confirm() {
//     setShowModal(false);
//   }

//   function cancel() {
//     setShowModal(false);
//   }

//   useEffect(() => {
//     console.log("ONLY on mount");
//   }, []);

//   useEffect(() => {
//     console.log(`on mount AND on ${showModal} change`);
//   }, [showModal]);

//   useEffect(() => {
//     console.log(`EVERY render`);
//   });

//   return (
//     <div>
//       <Title></Title>
//       <div>
//         <input
//           type="text"
//           onChange={(event) => {
//             console.log(event.target.value);
//           }}
//         />
//         <button onClick={() => setShowModal(true)}>Add To Do</button>
//       </div>
//       <div className="todo__wrapper">
//         <Todo
//           onToDoDelete={onToDoDelete}
//           title="Finish Frontend Simplified"
//           paragraph="Code along with Frontend Simplified step by step."
//         ></Todo>
//         <Todo
//           onToDoDelete={onToDoDelete}
//           title="Finish Interview Section"
//           paragraph="Finish every interview question in the next 6 weeks."
//         ></Todo>
//         <Todo
//           onToDoDelete={onToDoDelete}
//           title="Land a $100k Job"
//           paragraph="Apply to 100 jobs."
//         ></Todo>
//       </div>
//       {showModal && (
//         <Modal title="Are you sure?" cancel={cancel} confirm={confirm}></Modal>
//       )}
//     </div>
//   );
// }

// export default App;
