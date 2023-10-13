import React,{useState} from "react"
import './styles/App.css'
import Leftside from "./components/Leftside"
import Form from './components/Form'
import Cardfront from './components/Cardfront'
import Cardback from './components/Cardback'



function App() {
  const [data, setData] = useState('')


  return (
    <div className="App">
       <Leftside></Leftside>
        <Form setData = {setData} ></Form> 
       <div className="cards">
        <Cardfront card = {data} ></Cardfront>
        <Cardback card = {data} ></Cardback>
       </div>
    </div>
  )
}

export default App