import React from 'react'
import './tierButtonContainer.css'


const TierButtonContainer = (props) => {
    const { handleTierClick, selectedTier, submitNpcs, disabled } = props

    return (

        <div className="tierContainer">
            <div
                className={selectedTier == 'tier1' ? 'selectedTierLabel tierLabel' : 'tierLabel'}
                onClick={() => handleTierClick("tier1")}
            >
                Tier 1
            </div>
            <div
                className={selectedTier == 'tier2' ? 'selectedTierLabel tierLabel' : 'tierLabel'}
                onClick={() => handleTierClick("tier2")}
            >
                Tier 2
            </div>
            <div
                className={selectedTier == 'tier3' ? 'selectedTierLabel tierLabel' : 'tierLabel'}
                onClick={() => handleTierClick("tier3")}
            >
                Tier 3
            </div>
            <button onClick={() => submitNpcs()} disabled={disabled} className="confirmationButton">
                &gt;
            </button>
        </div>

    )
};

export default TierButtonContainer;

