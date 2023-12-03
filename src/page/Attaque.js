
import Header from "../components/Header";
import TableauAttaque from "../components/TableauAttaque";
import {useEffect,useState } from "react";


function Attaque() {
    const attaque = ["Equipe","Ligue","Tir/Match","Tir Cadre / Match","Dribble / Match","Faute Subie / Match","Note"];
    const attaqueStat = [
      {id:1,equipe:"Wolves",ligue:"Premier League", tirMatch:"11.00" , tirCadreMatch:"3.50", dribbleMatch:"17.20", fauteSubieMatch: "10.70",note:"6.60"},
      {id:2,equipe:"Bayern Munich",ligue:"Bundesliga", tirMatch:"19.95" , tirCadreMatch:"8.30", dribbleMatch:"15.65", fauteSubieMatch: "9.30",note:"7.16"},
      {id:3,equipe:"Nice",ligue:"Ligue 1", tirMatch:"12.90" , tirCadreMatch:"3.10", dribbleMatch:"14.10", fauteSubieMatch: "11.30",note:"6.78"}
    ];

    //fonction maka anle data dia omena url
    function getDataFromUrl(url) {
      return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              let response = JSON.parse(xhr.responseText);
              resolve(response);
            } else {
              reject(new Error("Échec de la requête. Statut : " + xhr.status));
            }
          }
        };
        xhr.send();
      });
    }

    //traitement anle data ho an'i genereal ftsn
    const [dataAttaqueGeneral, setDataGeneral] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getDataFromUrl("https://statfootmada.azurewebsites.net/api/Statistique/selectStatAttaqueGeneral");
          setDataGeneral(response);
        } catch (error) {
          console.error("Erreur lors de la récupération des données :", error.message);
        }
      };
  
      fetchData();
    }, []); 

    const [dataAttaqueDomicile, setDataAttaqueDomicile] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getDataFromUrl("https://statfootmada.azurewebsites.net/api/Statistique/selectStatAttaqueDomicile");
          setDataAttaqueDomicile(response);
        } catch (error) {
          console.error("Erreur lors de la récupération des données :", error.message);
        }
      };
  
      fetchData();
    }, []); 

    const [dataAttaqueExterieur, setDataAttaqueExterieur] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getDataFromUrl("https://statfootmada.azurewebsites.net/api/Statistique/selectStatAttaqueExterieur");
          setDataAttaqueExterieur(response);
        } catch (error) {
          console.error("Erreur lors de la récupération des données :", error.message);
        }
      };
  
      fetchData();
    }, []); 

    return (
      <>
        <Header></Header>        
        <TableauAttaque entete={attaque} data={dataAttaqueGeneral} title="General"></TableauAttaque>
        <TableauAttaque entete={attaque} data={dataAttaqueDomicile} title="Domicile"></TableauAttaque>
        <TableauAttaque entete={attaque} data={dataAttaqueExterieur} title="Exterieur"></TableauAttaque>
      </>
    );
  }
  
export default Attaque;
  