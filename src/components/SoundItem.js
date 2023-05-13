import React, { useState, useEffect, useRef } from "react";
import { BsFillVolumeOffFill, BsFillVolumeDownFill } from "react-icons/bs";


export default function SoundItem(props) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef();
    const progressBar = useRef();

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause();
        }

        if(props.isStopped) {
            audioRef.current.pause();
        } 

    }, [isPlaying, audioRef, props.isStopped]);

    const changeRange = (e) => {
        audioRef.current.volume = e.target.value / 100;
    };

    return(
        <div className='soundItemContainer'>
            <button className="soundBtn"
                onClick={() => setIsPlaying((prev) => !prev)}
                style={{
                    backgroundColor: (isPlaying && props.isStopped === false) ? "#FFFFFF" : "", 
                    color: (isPlaying && props.isStopped === false) ? "#222" : "", 
                }}
            >
                {props.item.icon}
            
                <audio loop volume='true' ref={audioRef} src={props.item.soundUrl} type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </button>

            {(isPlaying && props.isStopped === false) ? 
                <div>
                    <BsFillVolumeOffFill />
                    <input
                        type="range"
                        className='progressBar'
                        defaultValue="100"
                        ref={progressBar}
                        onChange={changeRange}
                    />
                    <BsFillVolumeDownFill/>
                </div>
            : "" 
            }
            <p className='soundItemName'>{props.item.title}</p>
        </div>
    )
}