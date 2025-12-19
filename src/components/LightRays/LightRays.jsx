import { motion } from 'framer-motion';

const LightRays = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
            {/* Optimized: Reduced blur radius and removed continuous JS animation loop for better performance */}
            <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-white opacity-[0.02] blur-[80px] rounded-full" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-white opacity-[0.02] blur-[100px] rounded-full" />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
        </div>
    );
};

export default LightRays;
