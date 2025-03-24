import { useState,useEffect } from "react"

function SmartHome() {
    const [isInside, setIsInside] = useState(false);
    const [temperature, setTemperature] = useState(30);
    const [isFanOn, setIsFanOn] = useState(false);
    const [isLocked, setIsLocked] = useState(false);

    // useEffect(() => {
    //     {isInside? <h1>Welcome Home</h1> : <h1>Home</h1> }
    //     {isInside? setTemperature(22) : setTemperature(28)}
    // }, [isInside])

    useEffect(()=>{
        if(isInside){
            document.title="Welcome Home";
            setTemperature(22);
        }else{
            document.title = "Home";
            setTemperature(28);
        }
    }, [isInside])

    return(
        <>
            <h1>{isInside ? ("You're HOME"): ("AWAY")}</h1>

            <div>
                Lights: {isInside ? ("🔦 ON") : ("🌑 OFF")}
            </div>

            <div>
            Temperature: {temperature}°C
            </div>

            <div>
                NETFLIX: 
                {isInside ? ("📺 ON") : ("📺 OFF")}
            </div>

            <div>
                Fan: 
                {isFanOn ? "🌪️ ON" : "* OFF "}
                <button onClick={()=>setIsFanOn(!isFanOn)}>{isFanOn ? "Stop" : "Start"}</button>
            </div>
            
            <div>
                Door:
                {isLocked ? "🔒 Locked" : "🔓 Unlocked"}
                <button onClick={()=>setIsLocked(!isLocked)}>{isLocked ? "Unlock" : "Lock"}</button>
            </div>

            <div>
                <button onClick={()=>setIsInside(!isInside)}>{isInside ? "🚪 Leave Home" : "🏡 Enter Home"}</button>
            </div>
        </>
    )
    
}
export default SmartHome;