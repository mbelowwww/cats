import React, {useEffect} from 'react'
import axios from "axios"
import {Button} from 'antd'
import './App.css';
import {CatFactsTable} from './components/CatFactsTable'
import {ICatFact} from "./interface/CatFacts";

const BASE_URL = 'https://catfact.ninja'
const FACTS_PATH = '/fact'

function App() {
  const [catFact, setFacts] = React.useState<ICatFact>()

  useEffect(() => {
      fetchFacts()
    },
    [])

  async function fetchFacts() {
    try {
      const response = await axios.get<ICatFact>(BASE_URL + FACTS_PATH)
      setFacts(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div className="App">
      <div className='button-getting-cat-facts-wrapper'>
        <Button onClick={() => fetchFacts()}
        > Get random facts</Button>
      </div>
      <CatFactsTable fact={catFact?.fact} length={catFact?.length}></CatFactsTable>
    </div>

  );
}

export default App;
