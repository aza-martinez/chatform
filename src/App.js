import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Layout from "./components/Layout";
import GlobalStyle from "./theme/globalStyles";
import Chat from "./components/Chat";
import MessageState from "./context/MessageContext/MessageState";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <MessageState>
            <Chat />
          </MessageState>
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
