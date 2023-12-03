
import Header from "../components/Header";
import TableauAttaque from "../components/TableauAttaque";
import {useEffect,useState } from "react";


function Attaque() {
    const attaque = ["Equipe","Ligue","Tir/Match","Tir Cadre / Match","Dribble / Match","Faute Subie / Match","Note"];
    
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
  