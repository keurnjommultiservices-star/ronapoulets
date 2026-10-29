// Numéro WhatsApp de Rona Poulets (format international, sans + ni espaces).
// TIERS : remise selon le nombre de poulets. "min" = quantité à partir de laquelle le prix s'applique,
// "price" = prix d'UN poulet en FCFA. Pour retirer la remise : TIERS: []
window.APP_CONFIG = {
  WHATSAPP: "221776121224",
  PHONE_TEXT: "+221 77 612 12 24",
  TIERS: [
    { min: 5,  price: 3300 },
    { min: 10, price: 3200 },
    { min: 20, price: 3000 }
  ]
};
