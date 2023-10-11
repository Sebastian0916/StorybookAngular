import React, { useEffect, useState } from 'react'


export const useProgress = (timeProgress: number) => {
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        let seconds = 0;
        const interval = setInterval(() => {
            seconds += 100;
            const progress = 100 - (seconds / timeProgress) * 100;
            setProgress(progress <= 0 ? 0 : progress);

            if (seconds >= timeProgress) {
                clearInterval(interval);
            }
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [timeProgress]);
    return {
        progressToast: progress
    }
}
