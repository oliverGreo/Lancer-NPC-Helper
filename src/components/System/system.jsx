import React from 'react'
import './system.css'


const System = (props) => {
    const { name, tags, isWeapon, reactionTrigger, description } = props.system
    const { isActive, toggleSystem } = props



    return (

        <div key={Math.random()} className={isWeapon ? 'system weapon' : 'system'} onClick={() => toggleSystem(name)}>
            <div className='systemName'>{name}</div>
            {isActive ?
                <>
                    <div className='systemTag'> {tags}</div>
                    {reactionTrigger ? <div className='triggerDescription'>Trigger: {reactionTrigger}</div> : null}
                    <div className='systemDescription'>{description}</div>
                </> : null}
        </div>

    )
}

export default System

