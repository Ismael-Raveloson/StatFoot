import Tableau from "../components/Tableau";
import Header from "../components/Header";
function Global() {

    const global = ["Equipe","Ligue","But","Tir/Match","Carton Jaune","Carton Rouge","Possession","Passe Réussies","Aérien Gagnés","Note"];
    const globalstat = [
      {id:1,equipe:"Bayern Munich",ligue:"Bundesliga",buts:"43.00",tirMatch:"19.95",cartonJaune:"17.00",cartonRouge:"1.00",possession:"62.90",passesReussies:"88.80",aerienGagnes:"12.75",note:"7.165"},
      {id:2,equipe:"Liverpool",ligue:"Premier League",buts:"17.00",tirMatch:"21.50",cartonJaune:"5.00",cartonRouge:"1.00",possession:"66.90",passesReussies:"87.80",aerienGagnes:"9.50",note:"7.040"},
      {id:3,equipe:"Paris Saint-Germain",ligue:"Ligue 1",buts:"34.00",tirMatch:"16.70",cartonJaune:"17.00",cartonRouge:"0.00",possession:"67.85",passesReussies:"90.45",aerienGagnes:"7.05",note:"7.04"},
      
    ];
    

    return (
      <>
        <Header></Header>
        <Tableau entete={global} data={globalstat} title="Global"></Tableau>
        <Tableau entete={global} data={globalstat} title="Domicile"></Tableau>
        <Tableau entete={global} data={globalstat} title="Exterieur"></Tableau>
      </>
    );
  }
  
export default Global;
  