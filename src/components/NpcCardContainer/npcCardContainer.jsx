import React from 'react'
import './npcCardContainer.css'
import NpcCard from '../NpcCard/npcCard';

const NpcCardContainer = (props) => {
    const { npcs, tier } = props

    return (
        <div className='npcCardContainer'>
            {
                npcs.map((npc) => (
                    <NpcCard key={npc.id} npc={npc} tier={tier} />
                ))
            }
        </div>
    )
};

export default NpcCardContainer;

