import { useState } from "react";
import BootScreen from "./components/BootScreen";
import Dashboard from "./pages/Dashboard";

function App() {
  const [bootFinished, setBootFinished] = useState(false);
  return (
    <>
      {bootFinished ? (
        <Dashboard />
      ) : (
        <BootScreen onComplete={() => setBootFinished(true)} />
      )}
    </>
  );
}

export default App;
