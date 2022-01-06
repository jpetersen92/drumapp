const DrumPad = (props) => {

    const playSound = () => {
        const soundBit = new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3');
        soundBit.play()
    }

    return (
        <div className="drum-container">
            <div className="control">
                <div className="screen">
                    <h3>{props.currentKit}</h3>
                </div>
                <div className="controls">
                    <button className="selection">Select -</button>
                    <button className="selection">Select +</button>
                </div>
                <div className="title">
                    <h1>WEB</h1>
                    <h2>Drumming</h2>
                </div>
            </div>
            <div className="drum-pads">
            <div className="row1">
                <button id="pad5" className="pad"><h4>PAD 5</h4></button>
                <button id="pad6" className="pad"><h4>PAD 6</h4></button>
                <button id="pad7" className="pad"><h4>PAD 7</h4></button>
                <button id="pad8" className="pad"><h4>PAD 8</h4></button>
            </div>
            <div className="row2">
                <button onClick={() => {playSound()}} id="pad1" className="pad"><h4>PAD 1</h4></button>
                <button id="pad2" className="pad"><h4>PAD 2</h4></button>
                <button id="pad3" className="pad"><h4>PAD 3</h4></button>
                <button id="pad4" className="pad"><h4>PAD 4</h4></button>
            </div>
            </div>
        </div>
    )
}

export default DrumPad