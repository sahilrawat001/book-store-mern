 import './App.css';
import Header from './Components/Header';
import {Route, Routes} from  'react-router-dom';
import React from 'react';
import Home from "./Components/Home"
import About from "./Components/About"
import Books from "./Components/Book/Books"
import AddBook from "./Components/Book/AddBook"  
import BookDetail from "./Components/Book/BookDetail"  
 function App() {
  return (
    <React.Fragment>
    <header >
     <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>  }    exact   />
        <Route path="/add" element={<AddBook/>  } exact   />
        <Route path="/books" element={ <Books/>  } exact   />
        <Route path="/about" element={<About/>  } exact   />
        <Route path="/books/:id" element={ <BookDetail/> } exact   />
      </Routes>
    </main>
    </React.Fragment>
  );
}
export default App;
