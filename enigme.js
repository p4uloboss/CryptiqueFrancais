// Fichier : enigme.js
// C'EST LE SEUL FICHIER À MODIFIER CHAQUE JOUR

const puzzleDuJour = {
    // 1. La réponse
    correctAnswser: "BELIERRRRRRRRRR",
    
    // 2. La longueur (pour affichage)
    clueLength: "(15)",
    
    // 3. L'explication finale (après avoir trouvé la réponse)
    finalExplanation: "Booba, de son prenom ELIE se retrouve au (dans le) Brésil (BR)",

    // 4. La structure de l'indice
    clueStructure: [
        { text: "Booba ", type: "source" },
        { text: "au ", type: "indicator" },
        { text: "Brésil?", type: "source" },
        { text: " Goat", type: "definition" }
    ],

    // 5. Les explications pour les boutons d'aide
    hintExplanations: {
        definition: "Goat est ici la définition, mais probablement pas dans le sens de Greatest Of All Time",
        source: "Il faut substituer un des mots et prendre une abréviation de l'autre",
        indicator: "L'indicateur 'au' indique que certaines lettres seront à placer à l'intérieur des autres"
    }
};
