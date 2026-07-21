import { useState } from "react";
import BootScreen from "./components/BootScreen";
import Dashboard from "./pages/Dashboard";

import TargetCursor from "./components/reusable/CustomCursor";

function App() {
  const [bootFinished, setBootFinished] = useState(false);
  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={1}
        cursorColor="#22d3ee"
        cursorColorOnTarget="#67e8f9"
      />
      {bootFinished ? (
        <Dashboard />
      ) : (
        <BootScreen onComplete={() => setBootFinished(true)} />
      )}
    </>
  );
}

export default App;
