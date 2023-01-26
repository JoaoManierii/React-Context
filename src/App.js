import React from "react";
import Container from "./components/Container";
import CountProvider from "./components/context/Count";
import ThemeProvider from "./components/context/Theme";
import Counter from "./components/Counter";
import Mirror from "./components/Mirror";



function App() {
  return (
    <ThemeProvider>
      <CountProvider>
        <Container>
          <Counter />
          <hr />
          <Mirror />
        </Container>
      </CountProvider>
    </ThemeProvider>
  );
}

export default App;