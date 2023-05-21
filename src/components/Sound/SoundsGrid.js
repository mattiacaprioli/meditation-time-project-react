import React from "react";
import soundData from "../../data/soundTrackData";
import SoundItem from "./SoundItem";
import './Sound.css';

const SoundsGrid = ({isStopped, setIsStopped}) => {

    
    const sounds = soundData.map(item => {
        return <SoundItem 
            key = {item.id}
            item = {item}
            isStopped={isStopped}
            setIsStopped={setIsStopped}
        />
    });

    return (
        <div className="soundGridContainer">
            <section className="soundGridSection">
                {sounds}
            </section>
        </div>
    )
}

export default SoundsGrid;