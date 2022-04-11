//import logo from './logo.svg';
import './App.css';

function App() {
  const link=["Service","Project","About"]
  return (
    <div className="navbar">
      <div className="innernav" >

        <div> <LOGO/> </div>

        <div className="service">
          {link.map((el)=>{
            return < Links links={el}/>
          })}
          {/* <div></div> 
          <div></div> 
          <div></div>  */}
        </div>
          
          <div>
            <Button/>
          </div>

      </div>
 
    </div>
  );
}
// component
function LOGO(){
  return <p >LOGOBAKERY</p>
}


function Links({links}){
  return <p> {links}</p>
}

function Button(){
  return<button className="btn" >CONTACT</button>
}


export default App;
