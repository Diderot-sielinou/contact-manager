import * as yup from 'yup';

const contactValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Veuillez entrer un email valide')
    .required("L'email est requis"),
  fullName: yup
    .string()
    // Autorise les lettres (y compris accentuées) et espaces uniquement
    .matches(/^[A-Za-zÀ-ÿ\s]+$/, "Le nom complet doit contenir uniquement des lettres et des espaces")
    .required('Le nom complet est requis'),
  phone: yup
    .string()
    // Autorise un numéro de téléphone avec éventuellement un '+' en début, suivi de 7 à 15 chiffres
    .matches(/^\+?[0-9]{7,15}$/, "Le numéro de contact doit être valide (7 à 15 chiffres, éventuellement précédé de '+')")
    .required('Le contact est requis'),
  job: yup
    .string()
    // Autorise les lettres (y compris accentuées) et espaces uniquement
    .matches(/^[A-Za-zÀ-ÿ\s]+$/, "La profession doit contenir uniquement des lettres et des espaces")
    .required('La profession est requise'),
    address:yup.string()
    .required("addresse est requis")
});

export default contactValidationSchema;
