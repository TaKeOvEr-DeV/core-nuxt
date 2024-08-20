import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify, DefaultsInstance, ThemeDefinition } from 'vuetify';
// import { defaults as vuetifyDefaults } from 'vuetify';


const defaults: DefaultsInstance = {
    VSheet: {
        color: "bg-red"
    },
    VTextField: {
        variant: "outlined",
        rounded: "lg",
        density: "compact"
    },
    VSelect: {
        variant: "outlined",
        rounded: "lg",
        density: "compact"
    },
    VAutocomplete: {
        variant: "outlined",
        rounded: "lg",
        density: "compact"
    },
    VSwitch: {
        inset: true,
    },
    VTextarea: {
        variant: "outlined",
        density: "compact",
        rounded: "lg",
    }

}
const light: ThemeDefinition = {
    dark: false,
    colors: {
        primary: '#7ed0e7',
        secondary: '#378ef7',
        // secondary: '#7ed0e7',
        // primary: '#378ef7',
        // background: '#0000FF',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        background_custom: '#F5F5F5'
    },

}
const dark: ThemeDefinition = {
    dark: true,
    colors: {
        primary: '#7ed0e7',
        secondary: '#378ef7',
        // secondary: '#7ed0e7',
        // primary: '#378ef7',
        // background: '#0000FF',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        background_custom: '#F5F5F5'
    },

}


export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        defaults: defaults,
        theme: {
            defaultTheme: 'light',
            themes: {
                light,
                dark

            },
        },
    })
    // loadFonts()
    app.vueApp.use(vuetify)
})