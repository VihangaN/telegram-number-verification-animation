import {forwardRef, useEffect, useRef, useState} from "react";
import body from '../assets/body.png';
import btn from '../assets/btn.png';
import reciever from '../assets/reciever.png';
import loader from '../assets/loader.gif';


const SvgComponent = ({number}) => {
    const svgRef = useRef(null);
    const [loadedCount, setLoadedCount] = useState(0);
    const totalImages = 10;

    useEffect(() => {
        if (svgRef.current && number) {
            const lastDigit = number.slice(-1);
            const activeBtnId = `btn-${lastDigit}`;
            const activeBtn = svgRef.current.getElementById(activeBtnId);
            activeBtn?.classList.add("press");
            activeBtn?.addEventListener('animationend', () => activeBtn.classList.remove("press"));
        }
    }, [number]);

    const handleImageLoad = () => {
        setLoadedCount((prevCount) => prevCount + 1);
    };

    return (
        <div className="phone-wrapper">
            {loadedCount < totalImages && <div className="loading">
                <img src={loader} alt="loading" />
            </div>}
            <svg
                id="Layer_2"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 315.36 316.1"
                ref={svgRef}
                className="phone-base"
            >
                <g id="Layer_1-2" data-name="Layer 1">
                    <g id="telephone">
                        <image
                            id="reciever"
                            width={1314}
                            height={441}
                            style={{transform: "scale(0.24)"}}
                            xlinkHref={reciever}
                            onLoad={handleImageLoad}
                        />
                        <image
                            id="body"
                            width={1247}
                            height={1156}
                            style={{transform: "translate(8.08px, 38.66px) scale(0.24)"}}
                            xlinkHref={body}
                            onLoad={handleImageLoad}
                        />
                        {[...Array(9)].map((_, i) => (
                            <image
                                key={i}
                                id={`btn-${i + 1}`}
                                width={137}
                                height={142}
                                style={{
                                    '--translateX': `${80 + (i % 3) * 60}px`,
                                    '--translateY': `${123 + Math.floor(i / 3) * 41}px`,
                                    '--scale': '0.24'
                                }}
                                xlinkHref={btn}
                                onLoad={handleImageLoad}
                            />
                        ))}
                    </g>
                </g>
            </svg>
        </div>
    );
};

const ForwardRef = forwardRef(SvgComponent);
export default ForwardRef;
