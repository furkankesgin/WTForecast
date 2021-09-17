const DEFAULTS = {

    storageNames:{
        // items will be stored with this names on the storage 
        applicationName: "WTForecast",

        customUIElements: "customUIElements",
        unit: "unit",
        city: "city",
        theme: "theme",
        useSystemTheme: "useSystemTheme"
    },

    storageDefaults: {
        // default values for storage items
        "customUIElements": {
            "pressure": true,
            "humidity": true,
            "wind": true,
            "cloudiness": true,
            "minmax": true,
            "feels": true,
            "lonlat": true,
            "sun": true
        },

        "unit": "metric",
        "city": "istanbul",
        "theme": "light",
        "useSystemTheme": true
    },

    // other defaults
    cityFormDebounceTime: 1000,
    weatherFetchInterval: 1000 * 60 * 60 // 1 hour
}

export default DEFAULTS;