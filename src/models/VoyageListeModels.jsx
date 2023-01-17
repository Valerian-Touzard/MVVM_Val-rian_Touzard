import React from 'react'
import ListeVoyage from '../view/ListeVoyage';
import VoyageListeViewModel from '../viewModel/VoyageListeViewModel';
import { v4 as uuidv4 } from 'uuid';

const VoyageListeModels = () => {

  /**
   * Injection de la logique via Viewmodel
   */
  const viewModel = VoyageListeViewModel();

  /**
   * Ajoute un voyage à la liste de voyage
   * @param {*} voyage 
   */
  const rajouterVoyage = (voyage) => {
    voyage.preventDefault();
    let newVoyage = constructionVoyage(voyage)
    viewModel.ajouterVoyage(newVoyage);
    reset(voyage);
  }

  /**
   * Construit l'objet contenant les informations du voyage
   * @param {*} voyage les infos du nouveau voyage
   * @returns un objet voyage
   */
  const constructionVoyage = (voyage) => {
    let lieu = voyage.target.lieu.value;
    let dateD = voyage.target.dateD.value;
    let nbPers = voyage.target.nbPers.value;
    let id = uuidv4();
    let newVoyage = {
      id: id,
      lieu: lieu,
      dateDepart: dateD,
      nbPers: nbPers
    }
    return newVoyage
  }

  /**
   * Remet à vide les champs du formulaire de création de voyage 
   * @param {*} voyage 
   */
  const reset = (voyage) => {
    voyage.target.lieu.value = "";
    voyage.target.dateD.value = "";
    voyage.target.nbPers.value = "";
  }

  return (
    <>
      <h3>Ma liste de voyages</h3>
      <ListeVoyage
        listeVoyages={viewModel.voyages}
        ajouterVoyage={rajouterVoyage}
        supprimerVoyage={viewModel.retirerVoyage}
      />
    </>
  )
}

export default VoyageListeModels