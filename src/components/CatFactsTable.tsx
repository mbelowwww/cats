import {ICatFact} from "../interface/CatFacts";

export const CatFactsTable = (
  {
    fact, length
  }: ICatFact) => {

  return (
    <div>
      <h1>Fact:</h1>
      <h1>{fact}</h1>
      <br/>
      <h1>Length:</h1>
      <h1>{length?.toString()}</h1>
    </div>
  )
}
