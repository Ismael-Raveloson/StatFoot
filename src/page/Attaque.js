
import Header from "../components/Header";
import TableauAttaque from "../components/TableauAttaque";

function Attaque() {
    const attaque = ["Equipe","Ligue","Tir/Match","Tir Cadre / Match","Dribble / Match","Faute Subie / Match","Note"];
    const attaqueStat = [
      {id:1,equipe:"Wolves",ligue:"Premier League", tirMatch:"11.00" , tirCadreMatch:"3.50", dribbleMatch:"17.20", fauteSubieMatch: "10.70",note:"6.60"},
      {id:2,equipe:"Bayern Munich",ligue:"Bundesliga", tirMatch:"19.95" , tirCadreMatch:"8.30", dribbleMatch:"15.65", fauteSubieMatch: "9.30",note:"7.16"},
      {id:3,equipe:"Nice",ligue:"Ligue 1", tirMatch:"12.90" , tirCadreMatch:"3.10", dribbleMatch:"14.10", fauteSubieMatch: "11.30",note:"6.78"}
    ];

    return (
      <>
        <Header></Header>        
        <TableauAttaque entete={attaque} data={attaqueStat} title="General"></TableauAttaque>
        <TableauAttaque entete={attaque} data={attaqueStat} title="Domicile"></TableauAttaque>
        <TableauAttaque entete={attaque} data={attaqueStat} title="Exterieur"></TableauAttaque>
      </>
    );
  }
  
export default Attaque;
  