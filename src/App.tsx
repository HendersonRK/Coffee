import { ThemeProvider } from "styled-components";
import { Router } from "./router.tsx";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styled/theme/DefaultTheme.ts";
import { GlobalStyle } from "./styled/global.ts";

export function App() {
  return ( 
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  );
}
