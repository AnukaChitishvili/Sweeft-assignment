import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { FetchContext } from "./context/FetchContext";
import Homepage from "./pages/homepage/Homepage";
import History from "./pages/history/History";
import useFetch from "./hooks/useFetch";

function App() {
  const { images, isLoading, error, setUrl } = useFetch();
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);

  return (
    <FetchContext.Provider
      value={{
        images,
        isLoading,
        error,
        setUrl,
        inputValue,
        setInputValue,
        history,
        setHistory,
      }}
    >
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </FetchContext.Provider>
  );
}

export default App;
