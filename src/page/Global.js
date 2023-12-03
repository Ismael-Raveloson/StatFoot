import Tableau from "../components/Tableau";
import Header from "../components/Header";
import {useEffect,useState } from "react";

function Global() {
    //ito tsy azo fafana
    const global = ["Equipe","Ligue","But","Tir/Match","Carton Jaune","Carton Rouge","Possession","Passe Réussies","Aérien Gagnés","Note"];


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
    const [dataGeneral, setDataGeneral] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getDataFromUrl("https://statfootmada.azurewebsites.net/api/Statistique/selectStatGeneral");
          setDataGeneral(response);
        } catch (error) {
          console.error("Erreur lors de la récupération des données :", error.message);
        }
      };
  
      fetchData();
    }, []); 

    const [data_domicile, setDataDomicile] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getDataFromUrl("https://statfootmada.azurewebsites.net/api/Statistique/selectStatGeneraDomicile");
          setDataDomicile(response);
        } catch (error) {
          console.error("Erreur lors de la récupération des données :", error.message);
        }
      };
  
      fetchData();
    }, []); 
    
    const [data_exterieur, setDataExterieur] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getDataFromUrl("https://statfootmada.azurewebsites.net/api/Statistique/selectStatGeneraExterieur");
          setDataExterieur(response);
        } catch (error) {
          console.error("Erreur lors de la récupération des données :", error.message);
        }
      };
  
      fetchData();
    }, []); 

    
    

    return (
      <>
        <Header></Header>

        <Tableau entete={global} data={dataGeneral} title="Global"></Tableau>
        <Tableau entete={global} data={data_domicile} title="Domicile"></Tableau>
        <Tableau entete={global} data={data_exterieur} title="Exterieur"></Tableau>
      </>
    );
  }
  
export default Global;
  