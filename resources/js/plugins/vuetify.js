import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

const options = {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.lightBlue.base,
        secondary: colors.orange.base,
        accent: colors.blue.base,
        error: colors.red.base,
        warning: colors.deepOrange.base,
        info: colors.cyan.base,
        success: colors.green.base,
      },
    },
  },
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
}

export default new Vuetify(options)