// Fichier : enigme.js
// C'EST LE SEUL FICHIER À MODIFIER CHAQUE JOUR

const puzzleDuJour = {
    // 1. La réponse
    correctAnswser: "TRAVERSE",
    
    // 2. La longueur (pour affichage)
    clueLength: "(8)",
    
    // 3. L'explication finale (après avoir trouvé la réponse)
    finalExplanation: "Il s'agit d'une 'double définition'. La réponse TRAVERSE signifie à la fois 'se dit d'un serpent' (le verbe) et 'un passage' (une traverse de chemin de fer, par exemple).",

    // 4. La structure de l'indice
    clueStructure: [
        { text: "Se dit d'un serpent", type: "definition" },
        { text: " et ", type: "neutral" },
        { text: "un passage", type: "definition" }
    ],

    // 5. Les explications pour les boutons d'aide
    hintExplanations: {
        definition: "C'est une 'double définition'. Les deux parties de l'indice (en vert) définissent le même mot.",
        source: "Il n'y a pas de 'source' (fourrage) dans ce type d'indice, car ce n'est pas une anagramme ou une charade.",
        indicator: "Il n'y a pas d'indicateur dans ce type d'indice. La structure 'A et B' suggère une double définition."
    }
};
