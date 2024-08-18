import React from 'react'
import './npcLabelContainer.css'


const NpcLabelContainer = (props) => {
    const { data, pickedNpcs, handleNpcChoice } = props

    return (
        <div className="npcLabelContainer">
            {
                data.map((entry, index) => (
                    <div
                        className={pickedNpcs.includes(entry.name) ? 'npcLabel npcChosen' : 'npcLabel'}
                        key={index}
                        onClick={() => handleNpcChoice(entry.name)}
                    >
                        {entry.name}
                    </div>
                ))
            }
        </div>
    )
}

export default NpcLabelContainer

