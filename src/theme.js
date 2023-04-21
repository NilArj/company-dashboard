import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#cfcfcf",
          200: "#9f9f9f",
          300: "#6e6e6f",
          400: "#3e3e3f",
          500: "#0e0e0f",
          600: "#0b0b0c",
          700: "#080809",
          800: "#060606",
          900: "#030303",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dde2dd",
          200: "#bbc5ba",
          300: "#99a898",
          400: "#778b75",
          500: "#556e53",
          600: "#445842",
          700: "#334232",
          800: "#222c21",
          900: "#111611",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#dce2e6",
          200: "#b8c5cd",
          300: "#95a8b3",
          400: "#718b9a",
          500: "#4e6e81",
          600: "#3e5867",
          700: "#2f424d",
          800: "#1f2c34",
          900: "#10161a",
        },
      }
    : {
        grey: {
          100: "#030303",
          200: "#060606",
          300: "#080809",
          400: "#0b0b0c",
          500: "#0e0e0f",
          600: "#3e3e3f",
          700: "#6e6e6f",
          800: "#9f9f9f",
          900: "#cfcfcf",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#111611",
          200: "#222c21",
          300: "#334232",
          400: "#445842",
          500: "#556e53",
          600: "#778b75",
          700: "#99a898",
          800: "#bbc5ba",
          900: "#dde2dd",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#10161a",
          200: "#1f2c34",
          300: "#2f424d",
          400: "#3e5867",
          500: "#4e6e81",
          600: "#718b9a",
          700: "#95a8b3",
          800: "#b8c5cd",
          900: "#dce2e6",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.grey[100],
            },
            secondary: {
              main: colors.greenAccent[400],
            },
            neutral: {
              dark: colors.grey[800],
              main: colors.grey[400],
              light: colors.grey[200],
            },
            background: {
              default: "#0e0e0f",
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.grey[100],
            },
            secondary: {
              main: colors.greenAccent[400],
            },
            neutral: {
              dark: colors.grey[600],
              main: colors.grey[800],
              light: colors.grey[900],
            },
            background: {
              default: "#EEEEEE",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};

