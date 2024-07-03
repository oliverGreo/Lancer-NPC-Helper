import React from 'react'
import './npcCard.css'
import System from '../System/system'
import { useState } from "react"

const NpcCard = (props) => {
    const { npc, tier } = props
    const [activeSystemNames, setActiveSystemNames] = useState([])


    const formatPropertyName = (name) => {
        const words = name.split(/(?=[A-Z-])/)
        const capitalizedWords = words.map((word, index) => {
            if (word.toLowerCase() === 'hp') {
                return 'HP'
            }
            if (word === '-') {
                return '-'
            }
            const spaceBefore = index === 0 || words[index - 1] === '-';
            const spaceAfter = index === words.length - 1 || words[index + 1] === '-';
            return (spaceBefore ? '' : ' ') + word.charAt(0).toUpperCase() + word.slice(1) + (spaceAfter ? '' : ' ')
        })
        return capitalizedWords.join('')
    };


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
            {/* ============================= Core Stats */}
            <div className="container coreStatsContainer">
                <div className="label">
                    CORE STATS
                </div>
                <div>
                    {Object.entries(tieredStats.corestats).map(([stat, value]) => (
                        <>
                            <div key={stat} className='stat'>
                                <span className='statLabel'>{formatPropertyName(stat)}:</span>
                                <span className='statValue'>{value}</span>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            {/* ============================= Mech Skills */}
            <div className="container mechSkillsContainer">
                <div className="label">
                    MECH SKILLS
                </div>
                <div>
                    {Object.entries(tieredStats.mechskills).map(([skill, value]) => (
                        <>
                            {/* <hr /> */}
                            <div key={skill} className="stat">
                                <span className='statLabel'>{formatPropertyName(skill)}:</span>
                                <span className='statValue'>{value}</span>
                            </div>
                        </>
                    ))}
                </div>
            </div>

            {/* ============================= Tactics
            <div className='container tacticsContainer'>
                <div className="label">
                    TACTICS
                </div>
                <div>
                    {npc.tactics}
                </div>
            </div> */}
            {/* ============================= Systems */}
            {/* ============== Base Systems */}
            <div className='container labelContainer'>
                <div className="label">
                    BASE SYSTEMS
                </div>
            </div>
            <div className='systemContainer'>
                {npc.mandatorySystems.map((system) =>
                    <System key={Math.random()} system={system} isActive={true} toggleSystem={() => { }} />
                )}
            </div>
            {/* ============== Optional Systems */}
            <div className='container labelContainer'>
                <div className="label">
                    OPTIONAL SYSTEMS
                </div>
            </div>
            <div className={'systemContainer'}>
                {activeSystems.map((system) =>
                    <System key={Math.random()} system={system} toggleSystem={() => setSystemInactive(system.name)} isActive={true} />
                )}
            </div >
            <div className={'systemContainer'}>
                {inactiveSystems.map((system) =>
                    <System key={Math.random()} system={system} toggleSystem={() => setSystemActive(system.name)} isActive={false} />
                )}

            </div >
        </div >
    );
};

export default NpcCard;

