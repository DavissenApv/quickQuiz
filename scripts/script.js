
//Recuperer les donées du fichier JSON
async function chargerQuestions() {
  //envoyer une requête HTTP GET à "pays.json, La réponse est stockée dans la variable response
  const response = await fetch ("pays.json");
  // extraire le contenu JSON de la réponse. le contenu JSON est ensuite stocké dans la variable chaquePays
  const chaquePays = await response.json();
  // Pour chaque élément pays[i++], la fonction creerQuestion est appelé avec les arguments container, pays  et index
    chaquePays.forEach((pays, index) => {
      creerQuestion (container, pays, index)
    });
  }

// utiliser le dom pour selectioné (.questions)
const container = document.querySelector(".questions");

// Fonction pour créer et afficher les questions
function creerQuestion(container, question) {
  const posezQuestionP = document.createElement("label");
  posezQuestionP.innerText = `Quel est la capitale de ${question.pays}`;

  const inputElement = document.createElement("input");
  inputElement.type = "text";

  const validerButton = document.createElement("button")
  validerButton.innerText = "Valider";

  const verifierReponse = document.createElement("p")
  verifierReponse.classList.add("message");

  //valider la reponse quand l'utilisateur clique sur le bouton valider
  validerButton.addEventListener("click", function() {
    let laReponseUtilisateur = inputElement.value.toLocaleLowerCase();
    //  verifier si laReponseUtilisateur est correcte
    if (laReponseUtilisateur === question.reponseCorrecte.toLowerCase()){
      verifierReponse.innerText = "Bonne réponse";
      verifierReponse.classList.add("correcte"); //   class pour le texte vert
      verifierReponse.classList.remove("incorrecte");
    } else {
      verifierReponse.innerText = "Mauvaise réponse";
      verifierReponse.classList.add("incorrecte"); // Class pour le texte rouge
      verifierReponse.classList.remove("correcte");
    }
  })
// ajoutez les elements dans l'element parent container
  container.appendChild(posezQuestionP);
  container.appendChild(inputElement);
  container.appendChild(validerButton);
  container.appendChild(verifierReponse);
}

  chargerQuestions();
