import { useParams } from "react-router-dom";
import { DisplayPostsForTribe } from "../components/displayPostsForTribe";

export default function Tribe() {
  const { tribeId } = useParams<{ tribeId: string }>()
  
  return (
    <div>
    <h1>Tribe</h1>
      <h2>{ tribeId }</h2>
      <DisplayPostsForTribe tribeId={tribeId} />
    </div>
  )
}