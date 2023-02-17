import React from 'react';

const Loader = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{
            margin: 'auto',
            background: 'transparent',
            display: 'block',
            }} width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g transform="translate(20 50)">
                <circle cx="0" cy="0" r="8" fill="#0051a2">
                    <animateTransform attributeName="transform" type="scale" begin="-0.4411764705882353s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1.1764705882352942s" repeatCount="indefinite"></animateTransform>
                </circle>
            </g><g transform="translate(40 50)">
            <circle cx="0" cy="0" r="8" fill="#1b75be">
                <animateTransform attributeName="transform" type="scale" begin="-0.29411764705882354s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1.1764705882352942s" repeatCount="indefinite"></animateTransform>
            </circle>
        </g><g transform="translate(60 50)">
            <circle cx="0" cy="0" r="8" fill="#408ee0">
                <animateTransform attributeName="transform" type="scale" begin="-0.14705882352941177s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1.1764705882352942s" repeatCount="indefinite"></animateTransform>
            </circle>
        </g><g transform="translate(80 50)">
            <circle cx="0" cy="0" r="8" fill="#89bff8">
                <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1.1764705882352942s" repeatCount="indefinite"></animateTransform>
            </circle>
        </g>
        </svg>
    );
};

export default Loader;