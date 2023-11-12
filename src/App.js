
import { ToastContainer } from "react-toastify"
// import { grey } from "@mui/material/colors";
// import Grid from '@mui/material/Unstable_Grid2';
import { Button } from "@mui/material";


import {AppContainer} from "./components"



const App = () => {

  return (
    <AppContainer>
      <div className="App" dir="rtl" >
        
        <Button variant="contained">تست</Button>
        
        <ToastContainer rtl={true} />
      </div>
    </AppContainer>


  );
}
export default App;
