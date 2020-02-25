import Vue from 'vue'

import './styles/quasar.scss'
import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import './assets/css/app.css';


import {
  Quasar, 
  QSlider,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QExpansionItem,
  QCard,
  QCardSection,
  QCheckbox,
  QInput,

} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QSlider,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QExpansionItem,
    QCard,
    QCardSection,
    QCheckbox,
    QInput
  },
  directives: {
  },
  plugins: {
  },
  iconSet: iconSet
 })