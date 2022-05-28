import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AllRoutes from "./routes";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense
        fallback={
          <div className="h-screen w-full grid place-items-center">
            <div className="animate-spin w-8 h-8 rounded border-8 border-black"></div>
          </div>
        }
      >
        <div data-testid="container" id="container">
          <AllRoutes />
        </div>
      </React.Suspense>
    </QueryClientProvider>
  );
}

export default App;
