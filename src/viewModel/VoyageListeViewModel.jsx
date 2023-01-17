import { useState } from 'react'
/**
 * C'est un composant fonction de type viewModel
 * Gestion de ma liste de voyages
 * @returns 
 */
const VoyageListeViewModel = () => {
    /**
     * liste de voyages
     */
    const [voyages, setVoyages] = useState([]);

    /**
     * Methode pour ajouter un voyage à la liste de voyage et trie ladite liste
     * @param {*} voyage à ajouter
     */
    const ajouterVoyage = (voyage) => {
        setVoyages([...voyages, voyage].sort((a, b) => Date.parse(a.dateDepart) - Date.parse(b.dateDepart)));
    }

    /**
     * Méthode pour retirer un voyage de la liste de voyages
     * @param {*} voyage à retirer
     */
    const retirerVoyage = (voyage) => {
        let id = voyage.id
        setVoyages(voyages.filter(v => v.id !== id));
    }

    return { voyages, ajouterVoyage, retirerVoyage }
}

export default VoyageListeViewModel