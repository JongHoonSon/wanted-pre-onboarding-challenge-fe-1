import { Router } from "./Router";
import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store/store";

const queryClient = new QueryClient();

function App() {
  return (
    <AppLayout>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Router />
        </Provider>
      </QueryClientProvider>
    </AppLayout>
  );
}

const AppLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
`;

export default App;
