const DrumPad = () => {
    return (
        <div className="drum-container">
            <div className="control">
                <div className="screen">
                    <h2>Drum Kit 1</h2>
                </div>
                <div className="controls">
                    <button>Select -</button>
                    <button>Select +</button>
                </div>

            </div>
            <div className="drum-pads">
            <div className="row1">
                <button className="pad">🥁</button>
                <button className="pad">🥁</button>
                <button className="pad">🥁</button>
                <button className="pad">🥁</button>
            </div>
            <div className="row2">
                <button className="pad">🥁</button>
                <button className="pad">🥁</button>
                <button className="pad">🥁</button>
                <button className="pad">🥁</button>
            </div>
            </div>
        </div>
    )
}

export default DrumPad