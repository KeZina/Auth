import React, { useEffect, useRef, useState } from 'react';

const Rocket = () => {
    const [isBackgroundVisible, setIsBackgroundVisible] = useState(true);
    const [isRocketVisible, setIsRocketVisible] = useState(false);

    const background = useRef();
    const rocket = useRef();

    // background-animation
    useEffect(() => {
        setTimeout(() => background.current.classList.add('start'));
        setTimeout(() => {
            background.current.classList.add('end');
            background.current.classList.remove('start');
            setIsRocketVisible(true);
        }, 2000)
        setTimeout(() => {
            background.current.classList.remove('end');
            setIsBackgroundVisible(false)
        }, 4000)
    }, [])

    return (
        <>
            {
                isBackgroundVisible &&
                <div ref = {background} id = 'background' />
            }
            {
                isRocketVisible &&
                <div ref = {rocket} id = 'rocket' />
            }
        </>
    )
}

export default Rocket;