import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { AddTodo } from "./components/AddTodo";
import { EditTodo } from "./components/EditTodo";
import PagenotFound from "./pages/PagenotFound";
function App() {
  return (
    <>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddTodo />} exact />
          <Route path="/edit/:id" element={<EditTodo />} exact />
          <Route path="*" element={<PagenotFound />} />
        </Routes>
      </GlobalProvider>
    </>
  );
}

export default App;
