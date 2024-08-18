import React, { useState } from 'react'
import System from '../System/system'
import TableContainer from '../TableContainer/tableContainer'
import './npcCard.css'

const NpcCard = (props) => {
    const { npc, tier } = props
    const [activeSystemNames, setActiveSystemNames] = useState([])

    const tieredStats = tier === 'tier1' ? npc.statsTier1 : tier === 'tier2' ? npc.statsTier2 : npc.statsTier3

    const activeSystems = []
    const inactiveSystems = []

    npc.optionalSystems.forEach((system) => {
        if (activeSystemNames.includes(system.name)) {
            activeSystems.push(system);
        } else {
            inactiveSystems.push(system);
        }
    })


    const setSystemActive = (systemName) => {
        if (!activeSystemNames.includes(systemName)) {
            setActiveSystemNames([...activeSystemNames, systemName])
        }
    }

    const setSystemInactive = (systemName) => {
        if (activeSystemNames.includes(systemName)) {
            const updatedSystemNames = [activeSystemNames.filter(activeSystem => activeSystem !== systemName)]
            setActiveSystemNames(...updatedSystemNames)
        }
    }

    return (
        <div className="npcCard">
            <div className='nameBox'>{npc.name}</div>
            <div className='npcTableContainer'>
                <TableContainer mechStats={tieredStats.corestats} mechSkills={tieredStats.mechskills} />
            </div>
            {/* ============================= Systems */}
            {/* ============== Base Systems */}
            <div className='container labelContainer'>
                <div className="infoLabel">
                    BASE SYSTEMS
                </div>
            </div>
            <div className='systemContainer'>
                {npc.mandatorySystems.map((system, index) =>
                    <System key={index} system={system} isActive={true} toggleSystem={() => { }} />
                )}
            </div>
            {/* ============== Optional Systems */}
            <div className='container labelContainer'>
                <div className="infoLabel">
                    OPTIONAL SYSTEMS
                </div>
            </div>
            <div className={'systemContainer'}>
                {activeSystems.map((system, index) =>
                    <System key={index} system={system} toggleSystem={(name) => setSystemInactive(name)} isActive={true} />
                )}
            </div >
            <div className={'systemContainer'}>
                {inactiveSystems.map((system, index) =>
                    <System key={index} system={system} toggleSystem={(name) => setSystemActive(name)} isActive={false} />
                )}

            </div >
        </div >
    );
};

export default NpcCard;

