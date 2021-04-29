import './style.css';
import imageInSrc from "./imageInSrc.jpg"

function App() {
  return (
    <div className="App">
  <div style={{"border":"solid 1px black","max-width":"100vw"}}>

<h1 className="title red">Sirine Ben Gabsia</h1>
<div>
  <br />
  </div>



 <img src={imageInSrc} alt ='myImage' />


 <div>
  <br />
  </div>

<img src="/imageInPublic.jpg" alt="myimage" />


</div>

<iframe width="320" height="240" src="https://www.youtube.com/embed/x_Lci5wVO_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>






  </div>
  );
}

export default App;
