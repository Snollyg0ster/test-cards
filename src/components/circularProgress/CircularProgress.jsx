const CircularProgress = ({size = 50}) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
            style={{ margin: "auto", background: "transparent none repeat scroll 0% 0%", display: "block", shapeRendering: "auto" }}
            width={size}
            height={size}
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="30" stroke="rgba(NaN, NaN, NaN, 0)" strokeWidth="10" fill="none"></circle>
            <circle cx="50" cy="50" r="30" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" fill="none">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="1s"
                    values="0 50 50;180 50 50;720 50 50"
                    keyTimes="0;0.5;1"></animateTransform>
                <animate attributeName="stroke-dasharray" repeatCount="indefinite" dur="1s"
                    values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882"
                    keyTimes="0;0.5;1"></animate>
            </circle>
        </svg>
    )
}

export default CircularProgress;