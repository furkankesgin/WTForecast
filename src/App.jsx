// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

// styled components
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

// custom font (handlee)
import "@fontsource/handlee";

// inner components
import Header from "./components/header/Header";
import Card1 from "./components/card1/Card1";
import Card2 from "./components/card2/Card2";
import Card3 from "./components/card3/Card3";

// statics
import THEMES from "./statics/THEMES";
import DEFAULTS from "./statics/DEFAULTS";

// custom hooks
import useStateWithAutoSave from './hooks/useStateWithAutoSave';
import useWeatherFetch from './hooks/useWeatherFetch';
import useCitySearch from './hooks/useCitySearch';
import useTheme from './hooks/useTheme';
import useDynamicTitle from './hooks/useDynamicTitle';


function App() {

	// Settings states
	const [unit, setUnit] = useStateWithAutoSave(DEFAULTS.storageNames.unit);
	const [customUIElements, setCustomUIElements] = useStateWithAutoSave(DEFAULTS.storageNames.customUIElements);

	// Custom city search hook, see function description
	const [city, setCity, citySearch, setCitySearch, isCityValid, setIsCityValid] = useCitySearch();

	// Custom weather fetch hook, see function description
	const [weather, setWeather, forecast, setForecast] = useWeatherFetch(city, DEFAULTS.weatherFetchInterval);

	// Custom theme hook, see function description
	const [theme, setTheme, useSystemTheme, setUseSystemTheme] = useTheme();

	// Dynamic title
	useDynamicTitle(weather, unit);

	return (
		<Container>
			<ThemeProvider theme={THEMES[theme] ? THEMES[theme] : THEMES[DEFAULTS.storageDefaults.theme]}>
				<GlobalStyles />
				<Header />

				<Card1
					weather={weather}

					isCityValid={isCityValid}
					setCitySearch={setCitySearch}

					unit={unit}
					setUnit={setUnit}

					customUIElements={customUIElements}
					setCustomUIElements={setCustomUIElements}

					theme={theme}
					setTheme={setTheme}
					useSystemTheme={useSystemTheme}
					setUseSystemTheme={setUseSystemTheme}
				/>

				<Card2 forecast={forecast} unit={unit} />
				<Card3 forecast={forecast} unit={unit} />
			</ThemeProvider>
		</Container>
	);

}

export default App;
