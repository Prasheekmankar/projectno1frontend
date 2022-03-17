import "./App.css";
import ResponsiveAppBar from "./appbar.js";
import { Main } from "./appbar";
import { Card } from "@mui/material";
function App() {
  return (
    
    <div className="App">
      <ResponsiveAppBar />
      <Card sx={{ my: 2, backgroundColor: "aqua", display: "block" }}>
        <div className="container">
          <div className="contain">
            <Main />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
