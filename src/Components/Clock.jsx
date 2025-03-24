import { useState, useEffect } from "react";

function Clock() {

    const [time, settime] = useState(new Date().toLocaleDateString());

    useEffect(() => {
        const interval = setInterval(() => {
            settime(new Date().toLocaleTimeString())
            
        }, 1000);

        return ( () => clearInterval(interval))
    }, [])

    return <h2>Current Time: {time}</h2>
}

export default Clock