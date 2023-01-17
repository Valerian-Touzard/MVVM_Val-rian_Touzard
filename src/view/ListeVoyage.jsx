import React from 'react'

const ListeVoyage = (props) => {

    const handleDelete = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        let voyageASuppr = props.listeVoyages[e.target.parentNode.getAttribute("id")]
        props.supprimerVoyage(voyageASuppr);
    }

  return (
    <>
        <h3>Formulaire de nouveaux voyages</h3>
        <form onSubmit={props.ajouterVoyage}>
            <div>
                <label htmlFor="lieu">nom du lieu: </label>
                <input id='lieu' name='lieu' type="text" placeholder='Paris...' />
            </div>
            <div>
                <label htmlFor="dateD">date de départ: </label>
                <input type="date" name="dateD" id="dateD" />
            </div>
            <div>
                <label htmlFor="nbPers">Nombre de personne: </label>
                <input type="number" name="nbPers" id="nbPers" />
            </div>
            <button type='submit'>Ajouter</button>
        </form>

        <h3>Mes voyages:</h3>
        {props.listeVoyages && props.listeVoyages.map((voyage, index)=>{
            return <li key={index}>
                <div id={index}>
                    <span>{voyage.lieu} {voyage.dateDepart} {voyage.nbPers}</span><br/>
                    <button onClick={handleDelete}>Supprimer</button>
                </div>
            </li>
        })}
    </>
  )
}

export default ListeVoyage