import NpcCardContainer from "./components/NpcCardContainer/npcCardContainer"
import NpcLabelContainer from "./components/NpcLabelContainer/npcLabelContainer"
import TierButtonContainer from "./components/TierButtonContainer/tierButtonContainer"
import Header from "./components/Header/header"
import "./App.css"
import data from "./mockLancerNpcs.json"
import { useState } from "react"

function App() {

  const [npcChoice, setNpcChoice] = useState([])
  const [pickedNpcs, setPickedNpcs] = useState([])
  const [selectedTier, setSelectdTier] = useState('tier1')


  const handleNpcChoice = (name) => {
    let newArray = []
    !pickedNpcs.includes(name) ? newArray = [...pickedNpcs, name] : newArray = pickedNpcs.filter(item => item !== name)
    setPickedNpcs(newArray)
  }

  const submitNpcs = () => {
    setNpcChoice(pickedNpcs)
  }

  const npcGotPicked = npcChoice.length != 0

  const handleTierClick = (selectedTier) => {
    setSelectdTier(selectedTier)
  }

  if (!data) { return null }


  const pickedNpcArray = data.filter((obj) => pickedNpcs.includes(obj.name))

  return (
    <div className="App">
      <Header data={data} />
      <div className="containerContainer">
        {!npcGotPicked ? (
          <>
            <NpcLabelContainer data={data} pickedNpcs={pickedNpcs} handleNpcChoice={(name) => handleNpcChoice(name)} />
            <TierButtonContainer handleTierClick={(tier) => handleTierClick(tier)} selectedTier={selectedTier} submitNpcs={() => submitNpcs()} disabled={pickedNpcs.length === 0} />

          </>
        ) : (
          <NpcCardContainer npcs={pickedNpcArray} tier={selectedTier} />
        )
        }
      </div >
    </div>
  )
}

export default App
