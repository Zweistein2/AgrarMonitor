import { createI18n, LocaleMessages, VueMessageType } from "vue-i18n";

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
function loadLocaleMessages(): LocaleMessages<VueMessageType> {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages: LocaleMessages<VueMessageType> = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key).default;
    }
  });
  return messages;
}

const numberFormats = {
  en: {
    currency: {
      style: "currency",
      currency: "USD",
      currencyDisplay: "symbol",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    percentage: {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    liter: {
      style: "unit",
      unit: "liter",
      unitDisplay: "short",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
    hectare: {
      style: "unit",
      unit: "hectare",
      unitDisplay: "short",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
    kilometer: {
      style: "unit",
      unit: "kilometer",
      unitDisplay: "short",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
    meter: {
      style: "unit",
      unit: "meter",
      unitDisplay: "short",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
    kilogram: {
      style: "unit",
      unit: "kilogram",
      unitDisplay: "short",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
    day: {
      style: "unit",
      unit: "day",
      unitDisplay: "long",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
    hour: {
      style: "unit",
      unit: "hour",
      unitDisplay: "short",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
    minute: {
      style: "unit",
      unit: "minute",
      unitDisplay: "short",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
  },
  de: {
    currency: {
      style: "currency",
      currency: "EUR",
      currencyDisplay: "symbol",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    percentage: {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    liter: {
      style: "unit",
      unit: "liter",
      unitDisplay: "short",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
    hectare: {
      style: "unit",
      unit: "hectare",
      unitDisplay: "short",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
    kilometer: {
      style: "unit",
      unit: "kilometer",
      unitDisplay: "short",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
    meter: {
      style: "unit",
      unit: "meter",
      unitDisplay: "short",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
    kilogram: {
      style: "unit",
      unit: "kilogram",
      unitDisplay: "short",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
    day: {
      style: "unit",
      unit: "day",
      unitDisplay: "long",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
    hour: {
      style: "unit",
      unit: "hour",
      unitDisplay: "short",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
    minute: {
      style: "unit",
      unit: "minute",
      unitDisplay: "short",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
  },
};
const dateTimeFormats = {
  en: {
    time: {
      hour: "numeric",
      minute: "numeric",
    },
    date: {
      month: "long",
      day: "numeric",
    },
    dateShort: {
      month: "short",
      day: "numeric",
    },
    month: {
      month: "long",
    },
  },
  de: {
    time: {
      hour: "numeric",
      minute: "numeric",
    },
    date: {
      month: "long",
      day: "numeric",
    },
    dateShort: {
      month: "short",
      day: "numeric",
    },
    month: {
      month: "long",
    },
  },
};

function supportedLocalesInclude(locale: string): boolean {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );

  locales.keys().forEach((key) => {
    if (key === locale) {
      return true;
    }
  });

  return false;
}

function getBrowserLocale(options = {}): string {
  const defaultOptions = { countryCodeOnly: false };

  const opt = { ...defaultOptions, ...options };

  const navigatorLocale =
    navigator.languages !== undefined
      ? navigator.languages[0]
      : navigator.language;

  if (!navigatorLocale) {
    return "en";
  }

  return opt.countryCodeOnly
    ? navigatorLocale.trim().split(/-|_/)[0]
    : navigatorLocale.trim();
}

function getStartingLocale() {
  const browserLocale = getBrowserLocale({ countryCodeOnly: true });

  if (supportedLocalesInclude(browserLocale)) {
    return browserLocale;
  } else {
    return process.env.VUE_APP_I18N_LOCALE || "de";
  }
}

export default createI18n({
  legacy: false,
  locale: getStartingLocale(),
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages(),
  numberFormats: numberFormats,
  datetimeFormats: dateTimeFormats,
  globalInjection: true,
});
