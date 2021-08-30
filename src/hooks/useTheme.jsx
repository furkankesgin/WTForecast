// react
import { useEffect } from "react";

// custom hooks
import useStateWithAutoSave from "./useStateWithAutoSave";
import useSystemThemeDetector from "./useSystemThemeDetector";

// statics
import DEFAULTS from "../statics/DEFAULTS";

const useTheme = () => {
    // theme hook for both using system theme and user selected theme
    // uses useSystemThemeDetector for detecting system theme

    // theme and useSystemTheme options will be auto saved to the storage on change
	const [theme, setTheme] = useStateWithAutoSave(DEFAULTS.storageNames.theme);
	const [useSystemTheme, setUseSystemTheme] = useStateWithAutoSave(DEFAULTS.storageNames.useSystemTheme);
	const isPreferredThemeDark = useSystemThemeDetector();

	useEffect(() => {
		// change theme with using system theme, on system theme change

		if (useSystemTheme) {
			if (isPreferredThemeDark) {
				setTheme("dark");
			}
			else {
				setTheme("light");
			}
		}
		// storage.setToStorage({ useSystemTheme: useSystemTheme });
	}, [theme, useSystemTheme, isPreferredThemeDark])

	return [theme, setTheme, useSystemTheme, setUseSystemTheme];
}

export default useTheme;