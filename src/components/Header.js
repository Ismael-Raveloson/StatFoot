import '../assets/css/header.css';
function Tableau() {
    return (
      <div class="header">
      <span class="logo">StatFoot</span>
        <div class="link">
            <p><a href="./">Général</a></p>
            <p><a href="./attaque">Attaque</a></p>
            <p><a href="./defense">Défense</a></p>
        </div>
      </div>
    );
  }
  
export default Tableau;