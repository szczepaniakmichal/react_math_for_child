import { en, pl } from "translations";

const config = {
    resources: {
        en: { translation: en },
        pl: { translation: pl },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
}

export default config;