import { CssBaseline} from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from 'scenes/login'
import Receipt from 'scenes/receipt'
import Export from 'scenes/export'
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/export" element={<Export />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
