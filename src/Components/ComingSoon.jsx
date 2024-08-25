import React from 'react';
import CountdownTimer from './CountdownTimer';
import Introduction from './Introduction';
import SocialSection from './SocialSection';

const ComingSoon = () => (
    <section className="min-h-screen bg-[#000] flex flex-col justify-center items-center text-center p-4 relative overflow-hidden">
        <div className='container max-w-[1140px] relative z-10'>
            <div className="text-white">
                <Introduction />
                <CountdownTimer />
                <SocialSection />
            </div>
        </div>
    </section>
);

export default ComingSoon;
