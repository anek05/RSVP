import "./App.css";
import Start from "./Start/Start.jsx";
import Platser from "./Platser/Platser.js";
import WeddingForm from "./WeddingForm.js";
import informationImage from "./Images/Information.png"

function App() {
  return (
    // <div className="App container text-center">
    //   <h1>Den som väntar på något gott väntar på 13 Augusti</h1>
    //   <p>
    //     Sidan är under konstruktion och klar inom kort, kom tillbaka snart igen!
    //   </p>
    // </div>
    <div>

      <Start />
    <div id="hem" className="App container justify-content-center">
      <div
        id="nav"
        className="row justify-content-between sticky-top mt-5"
        >
        <a className="btn nav-btn btn-sm col" href="#hem">
          Hem
        </a>
        <a className="btn nav-btn btn-sm col" href="#information">
          Information
        </a>
        <a className="btn nav-btn btn-sm col" href="#platser">
          Platser
        </a>
        <a className="btn nav-btn btn-sm col" href="#onskelista">
          Önskelista
        </a>
        <a className="btn nav-btn btn-sm col" href="#osa">
          OSA
        </a>
      </div>
      <div className="row text-center my-5">
        <h2>VI SKA GIFTA OSS</h2>
        <p>Välkommen på vår vigsel den 13 augusti.</p>
        <p>Vi ser verkligen fram emot att fira denna dag tillsammans med er!</p>
        <p>Kram Elsa och Sebastian</p>
      </div>
      <hr></hr>
      <div id="information" className="row text-center my-5">
        <img src={informationImage} alt="information" className="mb-5"></img>
        <h2>Bröllopsdagen</h2>
        <p className="col-8 mx-auto">
          Vigsel äger rum klockan 15.00 i Landskyrkan, Alingsås.
          Parkeringsplatser finns alldeles intill. Efter vigseln fortsätter
          festen för inbjudna gäster på Chalmers Grand Cabin i Härryda, som
          ligger ca 40 minuter från Alingsås. Här finns det tyvärr ont om
          parkeringsplatser. Samåk gärna i största möjliga mån. Parkera vid
          grusplanen.
        </p>
        <p className="">
          För platsinformation till vigseln och festlokalen, se{" "}
          <a className="btn nav-btn btn-sm col" href="#platser">
          Platser
        </a>
        </p>
        <p className="col-8 mx-auto">
          Hoppas du vill vara med och förgylla vår dag! Tal och spex är varmt
          välkommet! Anmälan görs till värdarna ( namn på värdarna trevligt att
          ha med här) via 13aug2022@gmail.com
        </p>
        <div className="row text-center my-1 mt-4">
          <h3>Barn</h3>
          <p className="col-8 mx-auto">
            Barn är välkomna med på vigseln. Under fester tror vi att de har det
            roligare hos sina barnvakter.
          </p>
        </div>
        <div className="row text-center my-1 mt-4">
          <h3>Klädsel</h3>
          <p className="col-8 mx-auto">
            Kostym. Men det viktigaste är att du har på dig något som du känner
            dig fin och bekväm i.
          </p>
          <i>
            För ytterligare frågor? tveka inte att höra av er till brudparet
            eller till värdarna via: 13aug2022@gmail.com
          </i>
        </div>
      </div>
      <div id="platser" className="row">
        <hr className="my-4"></hr>
        <h2 className="text-center mt-5">Platser</h2>
        <Platser />
      </div>
      <hr className="mt-5"></hr>
      <div id="onskelista" className="onskelista text-center my-5">
        <h2>Önskelista</h2>
        <p className="mb-0">
          På länken nedan finns brudparets önskelista, om du vill ha tips. Där
          kan du även se ifall något redan är ikryssat.
        </p>
        <a href="https://presentlistan.nu/9895C3/" className="mt-0">
          Önskelista
        </a>
      </div>
      <hr className="mb-5"></hr>
      <div id="osa" className="row mb-5">
        <h2 className="text-center">OSA</h2>
        <WeddingForm />
      </div>
    </div>
    </div>
  );
}

export default App;
