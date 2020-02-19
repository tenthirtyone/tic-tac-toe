import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "./Components/Layout";

function App() {
  return (
    <ThemeProvider
      theme={createMuiTheme({
        palette: {
          primary: {
            main: "#062d3f"
          },
          secondary: {
            main: "#0086cc"
          }
        }
      })}
    >
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
