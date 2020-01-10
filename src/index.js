'use strict';

const i18nMessages = require('./messages');

exports.configurar = function(vueInstance) {
    try {
        if (vueInstance && vueInstance.$vuetify && !vueInstance.$vuetify.lang.locales["pt-BR"]) {
            vueInstance.$vuetify.lang.locales["pt-BR"] = i18nMessages["pt-BR"].$vuetify;
            vueInstance.$vuetify.lang.current = "pt-BR";
        }
    } catch (e) {
        // eslint-disable-next-line
        console.warn("[@qualitech/i18n] Falha ao adicionar tradução vuetify")
    }
};