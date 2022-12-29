import './App.css';
import Mainbar from './components/mainbar/Mainbar';
import Navbar from './components/navbar/Navbar';
import Link from './components/link/Link';
import Brand from './components/Brand/Brand';
import Footer from  "./components/footer/Footer"
import recog from "./components/images/icon-brand-recognition.svg"
import records from "./components/images/icon-detailed-records.svg"
import full from "./components/images/icon-fully-customizable.svg"

const brand1= {
  title:"  Brand Recognition",
  text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content. "
}
const brand2= {
  title:"Detailed Records",
  text:"  Gain insights into who is clicking your links. Knowing when and where  people engage with your content helps inform better decisions. "
}
const brand3= {
  title: "  Fully Customizable ",
  text: " Improve brand awareness and content discoverability through customizable   links, supercharging audience engagement. "
}

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Mainbar/>
      <div className="chained"> 
      <Link/>
        <div className="brand1">
        <Brand  title={brand1.title} img={recog} text={brand1.text} /> 
        <Brand style={{marginTop:"4em"}} title={brand2.title} img={records} text={brand2.text} /> 
        <Brand  style={{marginTop:"6em"}} title={brand3.title} img={full} text={brand3.text} />
        </div>  
      </div>
      <Footer/>
      
    
     
         
    </div>
  );
}

export default App;
