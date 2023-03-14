import { SnackbarProvider } from "notistack";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { appRouter } from "./router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SnackbarProvider />
      <RouterProvider router={appRouter} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
