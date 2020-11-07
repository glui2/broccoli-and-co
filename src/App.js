import "./App.scss";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import DialogContextProvider from "./contexts/dialogContext";

function App() {
  return (
    <div className="App">
      <Header />
      <DialogContextProvider>
        <Body />
      </DialogContextProvider>
      <Footer />
    </div>
  );
}

export default App;
