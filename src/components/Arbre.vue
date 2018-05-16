<template lang="html">
  <div class="arbre" v-if="display_it">
    <!--
    <div class="inline field">
      <label>Id: {{id}}</label>
    </div>
    <div class="inline field">
      <label>Nom: {{arbre_data.data.Nom}}</label>
    </div>
    <div>
      <code>{{arbre_data}}</code>
    </div>
  -->
    <div class="ui equal width grid">
      <div class="row">
        <div class="column">
          <div class="ui categorie">
            <h4>Emplacement</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div class="ui">
            <h5>Identifiant</h5>
            <span>{{arbre_data.data.IdObjet}}</span>
          </div>
        </div>
        <div class="column">
          <div class="ui">
            <h5>Statut</h5>
            <span>{{arbre_data.data.Validation}}</span>
          </div>
        </div>
        <div class="column">
          <div class="ui">
            <h5>Cadastré</h5>
            <span>{{(arbre_data.data.IsInCada === "1") ? 'Oui' : 'Non'}}</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div class="ui">
            <h5>Secteur</h5>
            <span>{{(arbre_data.data.Secteur !== undefined) ? arbre_data.data.Secteur.Nom : ""}}</span>
          </div>
        </div>
        <div class="column">
          <div class="ui">
            <h5>Emplacement</h5>
            <span>{{(arbre_data.data.Emplacement !== undefined) ? arbre_data.data.Emplacement.Nom : ""}}</span>
          </div>
        </div>
        <div class="column">
          <div class="ui">
            <h5>Rue</h5>
            <span>{{(arbre_data.data.Rue !== undefined) ? arbre_data.data.Rue.Nom : ""}}</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column">
          <div class="ui categorie">
            <h4>Classification</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div class="ui">
            <h5>Genre</h5>
            <span>{{arbre_data.data.Genre}}</span>
          </div>
        </div>
        <div class="column">
          <div class="ui">
            <h5>Espèce</h5>
            <span>{{arbre_data.data.Espece}}</span>
          </div>
        </div>
        <div class="column">
          <div class="ui">
            <h5>Cultivar</h5>
            <span>{{arbre_data.data.Cultivar}}</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div class="ui">
            <h5>Circonférence du tronc</h5>
            <span>{{arbre_data.data.Circonference}}</span>
          </div>
        </div>
        <div class="column">
          <div class="ui">
            <h5>Hauteur</h5>
            <span>{{arbre_data.data.Hauteur}}</span>
          </div>
        </div>
        <div class="column">
          <div class="ui">
            <h5>Diamètre de la couronne</h5>
            <span>{{arbre_data.data.DiamCouronne}}</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column">
          <div class="ui categorie">
            <h4>Environnement</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div class="ui">
            <h5>Environnement racinaire</h5>
            <span>{{arbre_data.data.EnvRacinaire}}</span>
          </div>
        </div>
        <div class="column">
          <div class="ui">
            <h5>Substrat</h5>
            <span>{{arbre_data.data.Substrat}}</span>
          </div>
        </div>
        <div class="column">
          <div class="ui">
            <h5>Entourage / cadre</h5>
            <span>{{arbre_data.data.Entourage}}</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div class="ui">
            <h5>Revêtement de surface</h5>
            <span>{{arbre_data.data.RevSurface}}</span>
          </div>
        </div>
        <div class="column">
          <div class="ui">
            <h5>Protection</h5>
            <span>{{arbre_data.data.Protection}}</span>
          </div>
        </div>
        <div class="column">
          <div class="ui">
            <h5>Année de plantation</h5>
            <span>{{arbre_data.data.AnneePlantation}}</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column">
          <div class="ui categorie">
            <h4>Etat sanitaire</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div class="ui">
            <h5>Pied</h5>
            <span>{{arbre_data.data.EtatSanitairePied}}</span>
          </div>
        </div>
        <div class="column">
          <div class="ui">
            <h5>Tronc</h5>
            <span>{{arbre_data.data.EtatSanitaireTronc}}</span>
          </div>
        </div>
        <div class="column">
          <div class="ui">
            <h5>Couronne</h5>
            <span>{{arbre_data.data.EtatSanitaireCouronne}}</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column">
          <div class="ui categorie">
            <h4>Catégorisation</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div class="ui">
            <h5>Arbre fruitier</h5>
            <span>{{(arbre_data.data.IsFruitTree == "1" ? "Oui" : "Non")}}</span>
          </div>
        </div>
        <div class="column">
          <div class="ui">
            <h5>Arbre privé</h5>
            <span>{{(arbre_data.data.IsPublic != "1" ? "Oui" : "Non")}}</span>
          </div>
        </div>
        <div class="column">
          <div class="ui">
            <h5>Arbre majestueux</h5>
            <span>{{(arbre_data.data.IsMajestic == "1" ? "Oui" : "Non")}}</span>
          </div>
        </div>
        <div class="column">
          <div class="ui">
            <h5>Dans le best of</h5>
            <span>{{(arbre_data.data.IsInBestOf == "1" ? "Oui" : "Non")}}</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column">
          <div class="ui center">
            <span class="bold">A contrôler:</span>&nbsp;&nbsp;{{(arbre_data.data.ToBeChecked !== undefined) ? arbre_data.data.ToBeChecked : '---'}}&nbsp;&nbsp;&nbsp;<span class="bold">Note:</span>&nbsp;&nbsp;{{(arbre_data.data.Note !== undefined) ? arbre_data.data.Note : '---'}}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'arbre',
  props: {
    id: {
      type: Number,
      required: true,
      validator (value) {
        return Number.isInteger(value) && (value > 0)
      }
    },
    src: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      display_it: false,
      arbre_data: {}
    }
  },
  watch: {
    '$route' () {
      this.fetchData()
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      axios.post(this.src, {id: this.id}).then(response => {
        this.arbre_data = response
        this.display_it = true
      }).catch(error => {
        if (error.response) {
          console.log('Error data: ', error.response.data, ' status: ', error.response.status, ' headers: ', error.response.headers)
        } else if (error.request) {
          console.log('Error request: ', error.request)
        } else {
          console.log('Error', error.message)
        }
        console.log(error.config)
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  .categorie
    padding-top: 25px
    box-sizing: border-box

  .categorie:nth-of-type(1)
    padding-top: 5px
    box-sizing: border-box

  h4
    font-weight: bold
    font-size: 18px

  .bold
    font-weight: bold

  .center
    text-align: center

  .segment
    position: relative
    background: #FFFFFF
    box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15)
    margin: 1rem 0em
    padding: 1em 1em
    border-radius: 0.28571429rem
    border: 1px solid rgba(34, 36, 38, 0.15)

  div.column > div
    // @extend .segment
</style>
