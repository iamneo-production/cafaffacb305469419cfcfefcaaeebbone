import './App.css';
import React from react;
import { useState } from react;

function App() {

  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleChange = (e) =>{
    e.preventDefault();
    const newName= e.target.value;
    setName(newName);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newGreeting = `Hello, ${name}!`;
    setGreeting(newGreeting);
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
