// Controllers/homeController.js

// Données des cours (seront remplacées par une base de données plus tard)
const courses = [
    {
      title: "Introduction à l'IA",
      description: "Découvrez les fondamentaux de l'intelligence artificielle.",
      price: 199,
      level: "Débutant"
    },
    {
      title: "Machine Learning Fondamental",
      description: "Apprenez les principes du machine learning et les algorithmes de base.",
      price: 299,
      level: "Intermédiaire"
    },
    {
      title: "Deep Learning Avancé",
      description: "Maîtrisez les réseaux de neurones profonds et leurs applications.",
      price: 399,
      level: "Avancé"
    }
  ];
  
  // Page d'accueil
  exports.index = (req, res) => {
    res.render("index", { pageTitle: "Accueil" });
  };
  
  // Page À propos
  exports.about = (req, res) => {
    res.render("about", { pageTitle: "À propos" });
  };
  
  // Page des cours
  exports.courses = (req, res) => {
    res.render("courses", {
      pageTitle: "Nos Cours",
      courses: courses
    });
  };
  
  // Page FAQ (corrigée et ajoutée)
  exports.faq = (req, res) => {
    res.render("faq", { pageTitle: "FAQ" });
  };
  
  // Page de contact
  exports.contact = (req, res) => {
    res.render("contact", { pageTitle: "Contact" });
  };
  
  // Traitement du formulaire de contact
  exports.processContact = (req, res) => {
    console.log("Données du formulaire reçues:");
    console.log(req.body);
    res.render("thanks", {
      pageTitle: "Merci",
      formData: req.body
    });
  };
  