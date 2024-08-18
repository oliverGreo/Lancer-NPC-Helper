import React from 'react'
import './npcCardContainer.css'
import NpcCard from '../NpcCard/npcCard';

const NpcCardContainer = (props) => {
    const { npcs, tier } = props

    return (
        <div className='npcCardContainer'>
            {
                npcs.map((npc, index) => (
                    <NpcCard key={index} npc={npc} tier={tier} />
                ))
            }
        </div>
    )
};

export default NpcCardContainer;

