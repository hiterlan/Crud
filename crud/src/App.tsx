import { Navbar } from "./Components/Navbar";
import { AuthContextProvider } from "./Components/Providers/Auth";
function App() {
  return (
    <>
      <header>
        <div className="App">
          <AuthContextProvider>
            <Navbar />
          </AuthContextProvider>
        </div>
      </header>
    </>
  );
}

export default App;
