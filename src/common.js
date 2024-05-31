// common.js

// Exemple de fonction pour calculer le score d'un combat
export function calculateCombatScore(pokemon1, pokemon2) {
    // Logique fictive pour le calcul du score
    const score1 = pokemon1.attack - pokemon2.defense;
    const score2 = pokemon2.attack - pokemon1.defense;
    return score1 > score2 ? 1 : score1 < score2 ? -1 : 0;
  }
  
  // Exemple de fonction pour obtenir une description d'un Pokémon
  export function getPokemonDescription(pokemon) {
    return `${pokemon.name} est un Pokémon de type ${pokemon.type} avec ${pokemon.hp} HP.`;
  }
  
  // Vous pouvez ajouter d'autres fonctions ou constantes ici selon vos besoins
  