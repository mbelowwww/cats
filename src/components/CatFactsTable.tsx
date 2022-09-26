import {ICatFact} from "../interface/CatFacts";
import {Card} from "antd";

export const CatFactsTable = (
  {
    fact, length
  }: ICatFact) => {

  return (
    <div>
      <Card
        title={length?.toString()}
        size='small'
      >
        {fact}
      </Card>
    </div>
  )
}
