import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Head from "./components/Head";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Head />
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
