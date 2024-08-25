// CountdownTimer.js
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-08-26T09:00:00');
        const now = new Date();
        const difference = targetDate - now;

        console.log('Target Date:', targetDate);
        console.log('Current Date:', now);
        console.log('Difference:', difference);

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="mb-7">
            <div id="defaultCountdown" className="is-countdown">
                <span className="text-center countdown-row countdown-show4 flex flex-wrap justify-center items-center">
                    {Object.keys(timeLeft).length ? (
                        <>
                            <span className="countdown-section my-[15px] mx-[17px] py-4 rounded inline-block h-24 relative w-24">
                                <span className="countdown-amount text-4xl font-bold leading-5 relative z-10">{timeLeft.days}</span>
                                <span className="countdown-period block text-lg">Days</span>
                            </span>
                            <span className="countdown-section my-[15px] mx-[17px] py-4 rounded inline-block h-24 relative w-24">
                                <span className="countdown-amount text-4xl font-bold leading-5 relative z-10">{timeLeft.hours}</span>
                                <span className="countdown-period block text-lg">Hours</span>
                            </span>
                            <span className="countdown-section my-[15px] mx-[17px] py-4 rounded inline-block h-24 relative w-24">
                                <span className="countdown-amount text-4xl font-bold leading-5 relative z-10">{timeLeft.minutes}</span>
                                <span className="countdown-period block text-lg">Minutes</span>
                            </span>
                            <span className="countdown-section my-[15px] mx-[17px] py-4 rounded inline-block h-24 relative w-24">
                                <span className="countdown-amount text-4xl font-bold leading-5 relative z-10">{timeLeft.seconds}</span>
                                <span className="countdown-period block text-lg">Seconds</span>
                            </span>
                        </>
                    ) : (
                        <p className="text-lg">Time's up!</p>
                    )}
                </span>
            </div>
        </div>
    );
};

export default CountdownTimer;
