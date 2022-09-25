import {ICatFact, ICatFacts} from "../interface/CatFacts";

export const CatFactsTable = (
  {
    fact, length
  }: ICatFact) => {

  return (
    <div>
      <h1>{fact}</h1>
      <h1>{length?.toString()}</h1>
    </div>
  )
}
