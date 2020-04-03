import React from 'react';
import PropTypes from "prop-types";
import Profil from "./profil/profil"
import './App.css';

function App() {
  const handleName = (x)=>{
        
    alert(x);
};

  return (
    <div className="App">
      
      <Profil fullName="MohamedLajmi" bio="industrial IT"  profession="student" handleName= {handleName}>
      
        </Profil>

    </div>
  );
}

Profil.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,

};
export default App;
