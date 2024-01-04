import { useParams } from 'react-router-dom'
import { GameDetailsParams } from '../../common/types/router-params.types'
import { useGame } from '../../game/hooks/use-game.hook'

const GameDetailsPage = () => {
  const { slug } = useParams() as GameDetailsParams

  const { data: game } = useGame(slug)

  return <div>{game?.description_raw}</div>
}
export default GameDetailsPage
