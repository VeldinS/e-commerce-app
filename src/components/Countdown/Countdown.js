'use client'
import { useState, useEffect } from 'react';

function Countdown() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0); // Set to midnight

        const difference = tomorrow - now;

        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return { hours, minutes, seconds };
    }

    const countHours = timeLeft.hours.toString().padStart(2, '0');
    const countMinutes = timeLeft.minutes.toString().padStart(2, '0');
    const countSeconds = timeLeft.seconds.toString().padStart(2, '0');

    return (
        <div className="countdown-container text-center py-8">
            <div className="countdown-time flex flex-row justify-center items-center gap-6">
                <div className="py-6 w-28 bg-white flex flex-col justify-center items-center">
                    <p className={'text-3xl text-black font-audiowide'}>{countHours}</p>
                    <p className={'text-xl text-black font-audiowide'}>hrs</p>
                </div>
                <div className="py-6 w-28 bg-white flex flex-col justify-center items-center">
                    <p className={'text-3xl text-black font-audiowide'}>{countMinutes}</p>
                    <p className={'text-xl text-black font-audiowide'}>min</p>
                </div>
                <div className="py-6 w-28 bg-white flex flex-col justify-center items-center">
                    <p className={'text-3xl text-black font-audiowide'}>{countSeconds}</p>
                    <p className={'text-xl text-black font-audiowide'}>sec</p>
                </div>
            </div>
        </div>
    );
}

export default Countdown;
