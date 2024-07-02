import React from 'react'
import './npcLabelContainer.css'


const NpcLabelContainer = (props) => {
    const { pickedNpcs, data, handleNpcChoice } = props

    return (

        <div className="npcLabelContainer">
            {
                data.map((entry) => (
                    <div
                        className={pickedNpcs.includes(entry.name) ? 'npcLabel npcChosen' : 'npcLabel'}
                        key={entry.id}
                        onClick={() => handleNpcChoice(entry.name)}
                    >
                        {entry.name}
                    </div>
                ))
            }
        </div>

    )
};

export default NpcLabelContainer;

