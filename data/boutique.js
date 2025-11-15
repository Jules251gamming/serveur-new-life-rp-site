// Fichier : js/boutique.js

// Structure de données adaptée pour correspondre à vos catégories et styles
const tousLesProduits = [
    // --- Catégorie VIP (Grid ID: grid-vip) ---
    { 
        id: 1, nom: "VIP SILVER (30 Jours)", prix: "4.99€", tag: "Accès de Base", categorie: "vip", 
        badge: "blue", features: ["File d'attente prioritaire (Tier 1)", "Accès à 3 véhicules custom SILVER", "Rôle Discord exclusif", "500 $ en jeu (par semaine)"] 
    },
    { 
        id: 2, nom: "VIP GOLD (60 Jours)", prix: "8.99€", tag: "L'expérience premium", categorie: "vip", 
        badge: "gold", is_gold: true, features: ["File d'attente prioritaire (Tier 2)", "Accès à 6 véhicules custom GOLD", "Kit de démarrage amélioré", "1 500 $ en jeu (par semaine)"] 
    },
    { 
        id: 3, nom: "VIP DIAMOND (1 An)", prix: "39.99€", tag: "L'engagement d'un an", categorie: "vip", 
        badge: "diamond", features: ["File d'attente prioritaire (Tier 3)", "Accès illimité à TOUS les véhicules VIP", "Accès à des vêtements uniques", "Possibilité de customiser une plaque"] 
    },
    { 
        id: 4, nom: "VIP ULTIME (Permanent)", prix: "79.99€", tag: "Accès illimité à vie", categorie: "vip", 
        badge: "diamond", is_ultimate: true, features: ["ACCÈS PRIORITAIRE MAX", "Accès illimité à TOUS les véhicules VIP", "1 Peinture chromée offerte", "+2 places de garage permanentes"] 
    },

    // --- Catégorie Coins Standard (Grid ID: grid-coins-standard) ---
    { 
        id: 5, nom: "Pack 1000 Coins", prix: "7.99€", tag: "Démarrage rapide", categorie: "coins_standard", 
        badge: "orange", features: ["1000 Coins HRP", "Bonus : 0%"] 
    },
    { 
        id: 6, nom: "Pack 1500 Coins", prix: "12.99€", tag: "Le choix malin", categorie: "coins_standard", 
        badge: "orange", features: ["1500 Coins HRP", "Bonus : 0%"] 
    },
    { 
        id: 7, nom: "Pack 2000 Coins", prix: "20.99€", tag: "Idéal pour les accessoires", categorie: "coins_standard", 
        badge: "orange", features: ["2000 Coins HRP", "Bonus : 0%"] 
    },
    { 
        id: 8, nom: "Pack 2500 Coins", prix: "25.99€", tag: "Petit Bonus + 100 Coins", categorie: "coins_standard", 
        badge: "diamond", features: ["2600 Coins HRP", "Bonus : 4%"] 
    },

    // --- Autres Packs de Coins (Grid ID: grid-coins-other) ---
    { id: 9, nom: "Pack 3000 Coins", prix: "34.99€", tag: "Idéal pour les tenues", categorie: "coins_other", badge: "orange", features: ["3000 Coins HRP", "Bonus : 0%"] },
    { id: 10, nom: "Pack 5000 Coins", prix: "49.99€", tag: "500 Coins Offerts", categorie: "coins_other", badge: "gold", features: ["5500 Coins HRP", "Bonus : 10%"] },
    { id: 11, nom: "Pack 10 000 Coins", prix: "89.99€", tag: "1500 Coins Offerts", categorie: "coins_other", badge: "diamond", is_ultimate: true, features: ["11 500 Coins HRP", "Bonus : 15%"] },

    // --- Packs de Soutien (Grid ID: grid-soutien-packs) ---
    { 
        id: 12, nom: "Pack Bronze", prix: "9.99€", tag: "Démarrage des avantages", categorie: "soutien_packs", badge: "orange", is_gold_border: true,
        features: ["1 000 Coins HRP inclus", "Rôle Discord Bronze exclusif", "Accès à 1 véhicule custom Bronze (30j)", "File d'attente prioritaire (Tier 1)", "1 Vêtement exclusif Bronze HRP"] 
    },
    { 
        id: 13, nom: "Pack Or", prix: "19.99€", tag: "Équilibre et valeur", categorie: "soutien_packs", badge: "gold", is_gold_border: true,
        features: ["2 500 Coins HRP inclus", "Rôle Discord Or exclusif", "Accès à 3 véhicules custom Or (60j)", "1 Changement de plaque d'immatriculation offert", "+1 Place de garage (30j)"] 
    },
    { 
        id: 14, nom: "Pack Ultime", prix: "39.99€", tag: "L'expérience avant le soutien massif", categorie: "soutien_packs", badge: "diamond", is_ultimate: true,
        features: ["5 000 Coins HRP inclus", "Rôle Discord Ultime exclusif", "Accès à TOUS les véhicules VIP (90j)", "5 Téléportations de véhicule (HRP Admin)", "Accès à 1 peinture néon exclusive (HRP)"] 
    },

    // --- Soutien Progressif (Grid ID: grid-soutien-progressif) ---
    // (Note: Les données ici sont simplifiées car l'original était très long)
    { 
        id: 15, nom: 'Soutien Spécial "400"', prix: '25€', tag: 'Le plus d\'avantages pour 25€', categorie: 'soutien_progressif', 
        badge: "blue", is_gold_border: true, features: ["2 750 Coins HRP", "File d'attente Tier 2", "+1 Place de garage (30j)", "20 Kits de réparation", "50 Contraventions effacées"] 
    },
    { id: 16, nom: "Soutien Progressif II", prix: "35€", tag: "Bonus 12%", categorie: "soutien_progressif", badge: "orange", is_gold_border: true, features: ["3 920 Coins HRP", "2 Véhicules VIP au choix (7j)", "Accès à 2 Vêtements HRP"] },
    { id: 17, nom: "Soutien Progressif III", prix: "45€", tag: "Bonus 15%", categorie: "soutien_progressif", badge: "orange", is_gold_border: true, features: ["5 175 Coins HRP", "5 Téléportations de véhicule", "2 Changements de plaque offerts"] },
    { id: 18, nom: "Soutien Progressif IV", prix: "55€", tag: "Bonus 18%", categorie: "soutien_progressif", badge: "orange", is_gold_border: true, features: ["6 490 Coins HRP", "1 Véhicule Majestueux (7j)", "File d'attente prioritaire Tier 3"] },
    { id: 19, nom: "Soutien Progressif V", prix: "65€", tag: "Bonus 20%", categorie: "soutien_progressif", badge: "diamond", features: ["7 800 Coins HRP", "1 Vêtement 'Diamond' exclusif", "1 Changement d'apparence offert"] },
    // Si l'utilisateur veut le reste des produits (Progressif VI, VII, VIII, IX, X), les ajouter ici.
];

// Mappage des catégories aux IDs de grille
const gridMap = {
    vip: 'grid-vip',
    coins_standard: 'grid-coins-standard',
    coins_other: 'grid-coins-other', // Pour les packs 3/5/10k
    soutien_packs: 'grid-soutien-packs',
    soutien_progressif: 'grid-soutien-progressif'
};


function generateProductCard(produit) {
    // 1. Détermine les classes de bordure spéciales
    let cardClasses = 'product-card';
    if (produit.is_ultimate) {
        cardClasses += ' ultimate-border';
    } else if (produit.is_gold_border) {
        cardClasses += ' gold-border';
    } else if (produit.categorie.includes('coin')) {
        cardClasses += ' coin-card';
    }

    // 2. Construction de la liste des avantages (features)
    const featuresHTML = produit.features.map(feature => {
        // Utilise le même icône que dans votre code HTML (fas fa-check-circle pour VIP, fas fa-coins/etc. pour Coins/Soutien)
        let icon = 'fas fa-check-circle'; 
        if (produit.categorie.includes('coin') || produit.categorie.includes('soutien')) {
            icon = 'fas fa-coins'; // Icône par défaut pour les packs
            if (feature.includes('Coins HRP')) icon = 'fas fa-coins';
            else if (feature.includes('File d\'attente')) icon = 'fas fa-check-double';
            else if (feature.includes('Véhicule')) icon = 'fas fa-car';
            else if (feature.includes('Bonus')) icon = 'fas fa-gift';
            // ... autres icônes basées sur le contenu de la feature
        }
        
        return `<li><i class="${icon}"></i> ${feature}</li>`;
    }).join('');

    // 3. Retourne la structure de la carte
    return `
        <div class="${cardClasses}" data-aos="zoom-in-up" data-aos-delay="100">
            <span class="badge ${produit.badge}">${produit.tag}</span>
            <h4>${produit.nom}</h4>
            <span class="tag">${produit.tag}</span>
            <div class="price">${produit.prix}</div>
            <ul class="features">
                ${featuresHTML}
            </ul>
            <a href="#" class="btn-primary" onclick="ajouterAuPanier(${produit.id}); return false;">Acheter</a>
        </div>
    `;
}


// 4. Fonction principale de rendu
document.addEventListener('DOMContentLoaded', () => {
    // Vérification des données
    if (typeof tousLesProduits === 'undefined' || tousLesProduits.length === 0) {
        console.error("Le tableau 'tousLesProduits' n'est pas chargé ou est vide.");
        return;
    }

    // Boucle sur toutes les catégories/grilles définies
    for (const categorie in gridMap) {
        const gridElement = document.getElementById(gridMap[categorie]);
        if (gridElement) {
            // Filtre les produits pour la grille actuelle
            const produitsFiltres = tousLesProduits.filter(p => p.categorie === categorie);
            
            // Insère le HTML généré dans l'élément de grille
            produitsFiltres.forEach(produit => {
                gridElement.innerHTML += generateProductCard(produit);
            });
        }
    }
});


// 5. Fonction d'achat (pour les boutons)
function ajouterAuPanier(produitId) {
    const produitSelectionne = tousLesProduits.find(p => p.id === produitId);
    
    if (produitSelectionne) {
        alert(`Vous avez sélectionné "${produitSelectionne.nom}" pour ${produitSelectionne.prix}. (Connectez ici votre lien de paiement !)`);
        // Ici, vous mettrez la logique de redirection vers le lien de paiement externe (PayPal, Stripe, Tipeee, etc.)
    }
}