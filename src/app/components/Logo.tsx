const Logo = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
            {/* Circuit Board "S" Graphic */}
            <svg
                className="w-8 h-10 sm:w-10 sm:h-12 md:w-12 md:h-16"
                viewBox="0 0 50 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Circuit board trace forming "S" - more angular, PCB-like */}
                <path
                    d="M25 5 L10 5 L10 15 L40 15 L40 25 L10 25 L10 35 L40 35 L40 45 L10 45 L10 55 L25 55 L25 60"
                    stroke="#00FF00"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                    fill="none"
                />
                {/* Connection pads/vias - 10 total */}
                <circle cx="10" cy="10" r="3.5" fill="#00FF00" />
                <circle cx="10" cy="10" r="1.5" fill="#000000" />
                
                <circle cx="40" cy="20" r="3.5" fill="#00FF00" />
                <circle cx="40" cy="20" r="1.5" fill="#000000" />
                
                <circle cx="10" cy="30" r="3.5" fill="#00FF00" />
                <circle cx="10" cy="30" r="1.5" fill="#000000" />
                
                <circle cx="40" cy="40" r="3.5" fill="#00FF00" />
                <circle cx="40" cy="40" r="1.5" fill="#000000" />
                
                <circle cx="10" cy="50" r="3.5" fill="#00FF00" />
                <circle cx="10" cy="50" r="1.5" fill="#000000" />
                
                <circle cx="25" cy="57" r="3.5" fill="#00FF00" />
                <circle cx="25" cy="57" r="1.5" fill="#000000" />
            </svg>
            
            {/* SERETRON Text */}
            <div className="text-white font-bold text-lg sm:text-xl md:text-2xl tracking-wider uppercase">
                SERETRON
            </div>
        </div>
    );
};

export default Logo;
