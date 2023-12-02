import TableauDefense from "../components/TableauDefense";
import Header from "../components/Header";

function Defense() {
  const defense = ["Equipe","Ligue","Tir / Match","Tacle / Match","Interception / Match","Faute / Match","Hors Jeu / Match","Note"];
  const defenseStat = [
    {id:1,equipe:"Mallorca",ligue:"Laliga", tirMatch:"11.00", tacleMatch:"22.40", interceptionMatch:"9.00", fauteMatch:"14.00", horsJeuxMatch:"5.60",note:"6.59"},
    {id:2,equipe:"Brest",ligue:"Ligue 1", tirMatch:"13.10", tacleMatch:"22.10", interceptionMatch:"10.00", fauteMatch:"12.30", horsJeuxMatch:"1.40",note:"6.61"},
    {id:3,equipe:"Valencia",ligue:"Laliga", tirMatch:"12.10", tacleMatch:"22.10", interceptionMatch:"9.00", fauteMatch:"13.10", horsJeuxMatch:"0.70",note:"6.50"}
  ];
    return (
      <>
        <Header></Header>
        <TableauDefense entete={defense} data={defenseStat} title="General"></TableauDefense>
        <TableauDefense entete={defense} data={defenseStat} title="Domicile"></TableauDefense>
        <TableauDefense entete={defense} data={defenseStat} title="Exterieur"></TableauDefense>
      </>
    );
  }
  
export default Defense;
  