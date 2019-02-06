import React, { useState } from 'react';
import './App.css';

const minumumVersion = "16.8.0";
function App(){
	const [isReady, setReady] = useState(React.version >= minumumVersion );
    return (
      <div className="App">
        <span>{isReady ? "Yes" : "No"}</span>
      </div>
    );
}

export default App;
