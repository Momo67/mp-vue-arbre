export const OBJ_URL_AJAX = 'http://localhost/goeland/objet/ajax'
export const ARBRE = {
  id: 0,
  nom: '',
  statut: -1,
  cadastre: -1,
  secteur: -1,
  emplacement: -1,
  rue: -1,
  genre: -1,
  espece: -1,
  cultivar: -1,
  circ_tronc: -1,
  hauteur: -1,
  diam_couronne: -1,
  env_racinaire: -1,
  env_racinaire_status: -1,
  substrat: -1,
  substrat_status: -1,
  entourage: -1,
  entourage_status: -1,
  rev_surface: -1,
  rev_surface_status: -1,
  protection: -1,
  protection_status: -1,
  annee_plantation: '',
  etat_sanitaire_pied: -1,
  etat_sanitaire_tronc: -1,
  etat_sanitaire_couronne: -1,
  fruitier: false,
  public: false,
  prive: false,
  majestueux: false,
  best_of: false,
  to_be_checked: -1,
  note: -1
}
export const FIELDS = [
  {
    name: 'IdThing',
    title: 'Identifiant',
    sortField: 'IdThing',
    titleClass: 'left aligned',
    dataClass: 'left aligned'
  },
  {
    name: 'Name',
    title: 'Nom',
    sortField: 'Name',
    titleClass: 'left aligned',
    dataClass: 'left aligned'
  },
  {
    name: '__component:custom-actions',
    title: 'Actions',
    titleClass: 'center aligned',
    dataClass: 'center aligned'
  }
]
export const SORTORDER = [
  {
    field: 'IdThing',
    sortField: 'IdThing',
    direction: 'asc'
  }
]
