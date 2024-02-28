import { useState, useEffect } from "react";
import LoadingScreen from "./src/screens/LoadingScreen";
import FormScreen from "./src/screens/FormScreen";

export default function App() {
  const [changeScreen, setChangeScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setChangeScreen(true);
    }, 5000);
  }, []);

  return changeScreen ? <FormScreen /> : <LoadingScreen />;
}
