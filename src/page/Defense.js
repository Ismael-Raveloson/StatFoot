import TableauDefense from "../components/TableauDefense";
import Header from "../components/Header";
import {useEffect,useState } from "react";

function Defense() {
  const defense = ["Equipe","Ligue","Tir / Match","Tacle / Match","Interception / Match","Faute / Match","Hors Jeu / Match","Note"];

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
  const [dataGeneral, setDataGeneral] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getDataFromUrl("https://statfootmada.azurewebsites.net/api/Statistique/selectStatDenfenseGeneral");
          setDataGeneral(response);
        } catch (error) {
          console.error("Erreur lors de la récupération des données :", error.message);
        }
      };
  
      fetchData();
    }, []);


    const [dataDomicle, setDataDomicile] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getDataFromUrl("https://statfootmada.azurewebsites.net/api/Statistique/selectStatDenfenseDomicile");
          setDataDomicile(response);
        } catch (error) {
          console.error("Erreur lors de la récupération des données :", error.message);
        }
      };
  
      fetchData();
    }, []);


    const [dataExterieur, setDataExterieur] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getDataFromUrl("https://statfootmada.azurewebsites.net/api/Statistique/selectStatDenfenseExterieur");
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
        <TableauDefense entete={defense} data={dataGeneral} title="General"></TableauDefense>
        <TableauDefense entete={defense} data={dataDomicle} title="Domicile"></TableauDefense>
        <TableauDefense entete={defense} data={dataExterieur} title="Exterieur"></TableauDefense>
      </>
    );
  }
  
export default Defense;
  