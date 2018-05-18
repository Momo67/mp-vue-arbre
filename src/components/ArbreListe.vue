<template lang="html">
  <div class="arbre-liste">
    <form target="_self" class="ui form">
      <div class="field categorie">
        <div class="one fields">
          <div class="field">
            <h4>Emplacement<button type="button" class="ui icon button inactive" @click="emplacement_display = !emplacement_display"><i class="chevron icon" :class="{down: emplacement_display, up: !emplacement_display}"></i></button></h4>
          </div>
        </div>
        <div class="emplacement" v-show="emplacement_display">
          <div class="three fields">
            <div class="field">
              <label>Nom / Id</label>
              <div class="ui input">
                <input v-model="nomid" type="text" placeholder="Nom / Id">
              </div>
            </div>
            <div class="field">
              <label>Statut</label>
              <my-select
              v-model="arbre.statut"
              :src="src_url"
              item="Validation"
              sort="asc"
              placeholder="Sélectionner un statut"
              ></my-select>
            </div>
            <div class="field">
              <label>Cadastré</label>
              <my-select
              v-model="arbre.cadastre"
              :options="yes_or_no"
              trackBy="value"
              fieldname="label"
              sort="desc"
              placeholder="Cadastré"
              ></my-select>
            </div>
          </div>
          <div class="three fields">
            <div class="field">
              <label>Secteur</label>
              <my-select
              v-model="arbre.secteur"
              :src="src_url"
              item="Secteur"
              sort="asc"
              placeholder="Sélectionner un secteur"
              ></my-select>
            </div>
            <div class="field">
              <label>Emplacement</label>
              <my-select
              v-model="arbre.emplacement"
              :src="src_url"
              item="Emplacement"
              :params="JSON.stringify({secteur: arbre.secteur})"
              sort="asc"
              placeholder="Sélectionner un emplacement"
              ></my-select>
            </div>
            <div class="field">
              <label>Rue</label>
              <my-select
              v-model="arbre.rue"
              :src="src_url"
              item="Rue"
              fieldname="SelectName"
              sort="asc"
              placeholder="Sélectionner une rue"
              ></my-select>
            </div>
          </div>
        </div>
      </div>

      <div class="field categorie">
        <div class="one fields">
          <div class="field">
            <h4>Classification<button type="button" class="ui icon button inactive" @click="classification_display = !classification_display"><i class="chevron icon" :class="{down: classification_display, up: !classification_display}"></i></button></h4>
          </div>
        </div>
        <div class="classification" v-show="classification_display">
          <div class="three fields">
            <div class="field">
              <label>Genre</label>
              <my-select
              v-model="arbre.genre"
              :src="src_url"
              item="Genre"
              sort="asc"
              placeholder="Sélectionner un genre"
              ></my-select>
            </div>
            <div class="field">
              <label>Espèce</label>
              <my-select
              v-model="arbre.espece"
              :src="src_url"
              item="Espece"
              :params="JSON.stringify({genre: arbre.genre})"
              sort="asc"
              placeholder="Sélectionner une espèce"
              ></my-select>
            </div>
            <div class="field">
              <label>Cultivar</label>
              <my-select
              v-model="arbre.cultivar"
              :src="src_url"
              item="Cultivar"
              :params="JSON.stringify({espece: arbre.espece})"
              sort="asc"
              placeholder="Sélectionner un cultivar"
              ></my-select>
            </div>
          </div>
          <div class="three fields">
            <div class="field">
              <label>Circonférence du tronc</label>
              <my-select
                v-model="arbre.circ_tronc"
                :src="src_url"
                item="Circonference"
                sort="asc"
                placeholder="Sélectionner une circonférence"
              ></my-select>
            </div>
            <div class="field">
              <label>Hauteur</label>
              <my-select
                v-model="arbre.hauteur"
                :src="src_url"
                item="Hauteur"
                sort="asc"
                placeholder="Sélectionner une hauteur"
              ></my-select>
            </div>
            <div class="field">
              <label>Diamètre de la couronne</label>
              <my-select
                v-model="arbre.diam_couronne"
                :src="src_url"
                item="DiamCouronne"
                sort="asc"
                placeholder="Sélectionner un diamètre"
              ></my-select>
            </div>
          </div>
        </div>
      </div>

      <div class="field categorie">
        <div class="one fields">
          <div class="field">
            <h4>Environnement<button type="button" class="ui icon button inactive" @click="environnement_display = !environnement_display"><i class="chevron icon" :class="{down: environnement_display, up: !environnement_display}"></i></button></h4>
          </div>
        </div>
        <div class="environnement" v-show="environnement_display">
          <div class="six fields">
            <div class="field">
              <label>Environnement racinaire</label>
              <my-select
              v-model="arbre.env_racinaire"
              :src="src_url"
              item="EnvRacinaire"
              sort="asc"
              placeholder="Sélectionner un environnement racinaire"
              ></my-select>
            </div>
            <div class="field">
              <label>&nbsp;</label>
              <my-select
              v-model="arbre.env_racinaire_status"
              :src="src_url"
              item="Status"
              sort="asc"
              placeholder="Sélectionner un status"
              ></my-select>
            </div>
            <div class="field">
              <label>Substrat</label>
              <my-select
              v-model="arbre.substrat"
              :src="src_url"
              item="Substrat"
              sort="asc"
              placeholder="Sélectionner un substrat"
              ></my-select>
            </div>
            <div class="field">
              <label>&nbsp;</label>
              <my-select
              v-model="arbre.substrat_status"
              :src="src_url"
              item="Status"
              sort="asc"
              placeholder="Sélectionner un status"
              ></my-select>
            </div>
            <div class="field">
              <label>Entourage / cadre</label>
              <my-select
              v-model="arbre.entourage"
              :src="src_url"
              item="Entourage"
              sort="asc"
              placeholder="Sélectionner un entourage"
              ></my-select>
            </div>
            <div class="field">
              <label>&nbsp;</label>
              <my-select
              v-model="arbre.entourage_status"
              :src="src_url"
              item="Status"
              sort="asc"
              placeholder="Sélectionner un status"
              ></my-select>
            </div>
          </div>
          <div class="six fields">
            <div class="field">
              <label>Revêtement de surface</label>
              <my-select
                v-model="arbre.rev_surface"
                :src="src_url"
                item="RevSurface"
                sort="asc"
                placeholder="Sélectionner un revêtement"
              ></my-select>
            </div>
            <div class="field">
              <label>&nbsp;</label>
              <my-select
              v-model="arbre.rev_surface_status"
              :src="src_url"
              item="Status"
              sort="asc"
              placeholder="Sélectionner un status"
              ></my-select>
            </div>
            <div class="field">
              <label>Protection</label>
              <my-select
                v-model="arbre.protection"
                :src="src_url"
                item="Protection"
                sort="asc"
                placeholder="Sélectionner une protection"
              ></my-select>
            </div>
            <div class="field">
              <label>&nbsp;</label>
              <my-select
              v-model="arbre.protection_status"
              :src="src_url"
              item="Status"
              sort="asc"
              placeholder="Sélectionner un status"
              ></my-select>
            </div>
            <div class="field">
              <label>Année de plantation</label>
              <input v-model="arbre.annee_plantation" type="text" placeholder="Année de plantation">
            </div>
            <div class="field">
              &nbsp;
            </div>
          </div>
        </div>
      </div>

      <div class="field categorie">
        <div class="one fields">
          <div class="field">
            <h4>Etat sanitaire<button type="button" class="ui icon button inactive" @click="etat_sanitaire_display = !etat_sanitaire_display"><i class="chevron icon" :class="{down: etat_sanitaire_display, up: !etat_sanitaire_display}"></i></button></h4>
          </div>
        </div>
        <div class="etat_sanitaire" v-show="etat_sanitaire_display">
          <div class="three fields">
            <div class="field">
              <label>Pied</label>
              <div class="field">
                <my-select
                v-model="arbre.etat_sanitaire_pied"
                :src="src_url"
                item="Etat"
                sort="asc"
                placeholder="Sélectionner un état"
                ></my-select>
              </div>
            </div>
            <div class="field">
              <label>Tronc</label>
              <my-select
              v-model="arbre.etat_sanitaire_tronc"
              :src="src_url"
              item="Etat"
              sort="asc"
              placeholder="Sélectionner un état"
              ></my-select>
            </div>
            <div class="field">
              <label>Couronne</label>
              <my-select
              v-model="arbre.etat_sanitaire_couronne"
              :src="src_url"
              item="Etat"
              sort="asc"
              placeholder="Sélectionner un état"
              ></my-select>
            </div>
          </div>
        </div>
      </div>

      <div class="field categorie">
        <div class="one fields">
          <div class="field">
            <h4>Catégorisation<button type="button" class="ui icon button inactive" @click="categorisation_display = !categorisation_display"><i class="chevron icon" :class="{down: categorisation_display, up: !categorisation_display}"></i></button></h4>
          </div>
        </div>
        <div class="categorisation" v-show="categorisation_display">
          <div class="five fields">
            <div class="field">
              <div class="ui checkbox">
                <input type="checkbox" v-model="arbre.fruitier">
                <label>Arbre fruitier</label>
              </div>
            </div>
            <div class="field">
              <div class="ui checkbox">
                <input type="checkbox" v-model="arbre.public">
                <label>Arbre public</label>
              </div>
            </div>
            <div class="field">
              <div class="ui checkbox">
                <input type="checkbox" v-model="arbre.prive">
                <label>Arbre privé</label>
              </div>
            </div>
            <div class="field">
              <div class="ui checkbox">
                <input type="checkbox" v-model="arbre.majestueux">
                <label>Arbre majestueux</label>
              </div>
            </div>
            <div class="field">
              <div class="ui checkbox">
                <input type="checkbox" v-model="arbre.best_of">
                <label>Dans le best of</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field categorie">
        <div class="six fields">
          <div class="field">&nbsp;</div>
          <div class="field mylabel">A contrôler:</div>
          <div class="field">
            <my-select
            v-model="arbre.to_be_checked"
            :src="src_url"
            item="ToBeChecked"
            sort="asc"
            placeholder="Sélectionner un contrôle"
            ></my-select>
          </div>
          <div class="field mylabel">Note:</div>
          <div class="field">
            <my-select
            v-model="arbre.note"
            :src="src_url"
            item="Note"
            sort="asc"
            placeholder="Sélectionner une note"
            ></my-select>
          </div>
          <div class="field">&nbsp;</div>
        </div>
      </div>

      <code>arbre: {{arbre}}</code>

      <div class="field">
        <div class="one fields">
          <div class="field">
            <button @click.prevent="search" class="ui primary button">Rechercher</button>
          </div>
          <div class="field">
            <button @click.prevent="reset" class="ui button" title="Remise à zèro des critères de recherche">Reset</button>
          </div>
        </div>
      </div>
    </form>

    <div>
      <my-liste v-if="display_liste" ref="myliste"
        :query="query"
        :src="src"
        :fields="fields"
        :sortOrder="sortOrder"
        rowDetails="row-details"
        :per-page="10"
        @detailDisplayed="onDetailDisplayed"
      ></my-liste>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { OBJ_URL_AJAX, ARBRE, FIELDS, SORTORDER } from '../config'
import MySelect from 'mp-vue-myselect'
import MyListe from 'mp-vue-myliste'
import CustomActions from './CustomActions'
import RowDetails from './RowDetails'

Vue.component('custom-actions', CustomActions)
Vue.component('row-details', RowDetails)

export default {
  name: 'arbre-liste',
  components: {
    MySelect,
    MyListe,
    CustomActions
  },
  data () {
    return {
      arbre: {},
      query: {objet: {}},
      src: `${OBJ_URL_AJAX}/arbre_liste3.php`,
      fields: FIELDS,
      sortOrder: SORTORDER,
      display_liste: false,
      yes_or_no: [
        {value: '1', label: 'Oui'}, {value: '0', label: 'Non'}
      ],
      nomid: '',
      emplacement_display: true,
      classification_display: true,
      environnement_display: true,
      etat_sanitaire_display: true,
      categorisation_display: true
    }
  },
  computed: {
    src_url () {
      return `${OBJ_URL_AJAX}/arbre_get_select.php`
    }
  },
  watch: {
    nomid: {
      handler (val) {
        if (isNaN(val)) {
          this.arbre.id = 0
          this.arbre.nom = val
        } else {
          this.arbre.id = val
          this.arbre.nom = ''
        }
      },
      deep: true
    }
  },
  methods: {
    search () {
      this.query.objet = {...this.arbre}
      this.display_liste = true
    },
    reset () {
      this.arbre = {...ARBRE}
      this.nomid = ''
      this.display_liste = false
    },
    onDetailDisplayed (event) {
      // console.log('Appel de onDetailDisplayed event: ', event)
      // this.display_liste = !this.display_liste
    }
  },
  mounted () {
    this.arbre = {...ARBRE}
    this.emplacement_display = true
    this.classification_display = false
    this.environnement_display = false
    this.etat_sanitaire_display = false
    this.categorisation_display = false
  }
}
</script>

<style lang="sass" scoped>
  .ui.icon.button
    background-color: rgba(0, 0, 0, 0)

  .categorie
    padding-top: 25px
    box-sizing: border-box

  .categorie:nth-of-type(1)
    padding-top: 5px
    box-sizing: border-box

  .mylabel
    text-align: right
    vertical-align: bottom

  h4
    font-weight: bold
    font-size: 18px
</style>
