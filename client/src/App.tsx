// App.tsx
import { useState } from "react";
import Preloader from "./pages/Preloader";
import HomeScreen from "./pages/HomeScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderFinish = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Preloader onFinish={handlePreloaderFinish} />
      ) : (
        <HomeScreen />
      )}
    </>
  );
}

export default App;
