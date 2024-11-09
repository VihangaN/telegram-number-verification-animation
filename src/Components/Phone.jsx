import {forwardRef, useEffect, useRef} from "react";
import body from '../assets/body.png';
import btn from '../assets/btn.png';
import reciever from '../assets/reciever.png';

const SvgComponent = ({number}) => {

    const svgRef = useRef(null);

    useEffect(() => {
        if (svgRef.current && number) {
            const lastDidit = number.slice(-1)
            const activeBtnId = `btn-${lastDidit}`;
            const activeBtn = svgRef.current.getElementById(activeBtnId);
            activeBtn?.classList.add("press");
            activeBtn?.addEventListener('animationend', () => activeBtn.classList.remove("press"));
        }
    }, [number])
    return (
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
                    />
                    <image
                        id="body"
                        width={1247}
                        height={1156}
                        style={{transform: "translate(8.08px, 38.66px) scale(0.24)"}}
                        xlinkHref={body}
                    />
                    <image
                        id="btn-1"
                        width={137}
                        height={142}
                        style={{transform: "translate(82.81px, 123.59px) scale(0.24)"}}
                        xlinkHref={btn}
                        className=""
                    />
                    <image
                        id="btn-2"
                        width={137}
                        height={142}
                        style={{transform: "translate(141.37px, 123.59px) scale(0.24)"}}
                        xlinkHref={btn}
                        className=""
                    />
                    <image
                        id="btn-3"
                        width={138}
                        height={142}
                        style={{transform: "translate(199.69px, 123.59px) scale(0.24)"}}
                        xlinkHref={btn}
                        className=""
                    />
                    <image
                        id="btn-4"
                        width={137}
                        height={142}
                        style={{transform: "translate(81.85px, 168.23px) scale(0.24)"}}
                        xlinkHref={btn}
                        className=""
                    />
                    <image
                        id="btn-5"
                        width={137}
                        height={142}
                        style={{transform: "translate(141.37px, 168.23px) scale(0.24)"}}
                        xlinkHref={btn}
                        className=""
                    />
                    <image
                        id="btn-6"
                        width={138}
                        height={142}
                        style={{transform: "translate(200.65px, 168.23px) scale(0.24)"}}
                        xlinkHref={btn}
                        className=""
                    />
                    <image
                        id="btn-7"
                        width={137}
                        height={142}
                        style={{transform: "translate(80.89px, 209.75px) scale(0.24)"}}
                        xlinkHref={btn}
                        className=""
                    />
                    <image
                        id="btn-8"
                        width={137}
                        height={142}
                        style={{transform: "translate(141.37px, 209.75px) scale(0.24)"}}
                        xlinkHref={btn}
                        className=""
                    />
                    <image
                        id="btn-9"
                        width={137}
                        height={142}
                        style={{transform: "translate(201.85px, 209.75px) scale(0.24)"}}
                        xlinkHref={btn}
                        className=""
                    />
                </g>
            </g>
        </svg>
    );
}

const ForwardRef = forwardRef(SvgComponent);
export default ForwardRef;

