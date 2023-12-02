import { Link } from "react-router-dom";
import '../assets/css/header.css';

function Tableau() {
  
    return (
      <div class="header">
      <span class="logo">StatFoot</span>
        <div class="link">
            <p><Link to="./">Général</Link></p>
            <p><Link to="./attaque">Attaque</Link></p>
            <p><Link to="./defense">Défense</Link></p>
        </div>
      </div>
    );
  }
  
export default Tableau;