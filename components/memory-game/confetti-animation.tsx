import type { CSSProperties, FC } from "react";
import { useCallback, useEffect, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const animationTime = 5 * 1000;

const randomInRange = (min: number, max: number): number => Math.random() * (max - min) + min;

const canvasStyles: CSSProperties = {
    height: "100%",
    left: 0,
    pointerEvents: "none",
    position: "fixed",
    top: 0,
    width: "100%",
};

const getAnimationSettings = (originXA: number, originXB: number) => {
    return {
        colors: ["#ffffff", "#84cc16", "#ecfccb", "#4d7c0f", "#22863a"],
        origin: {
            x: randomInRange(originXA, originXB),
            y: Math.random() - 0.2,
        },
        particleCount: 150,
        spread: 360,
        startVelocity: 30,
        ticks: 60,
        zIndex: 100,
    };
};

const ConfettiAnimation: FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const referenceAnimationInstance = useRef<any>(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getInstance = useCallback((instance: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        referenceAnimationInstance.current = instance;
    }, []);

    useEffect(() => {
        let animationInterval: number | undefined;

        const startAnimation = () => {
            animationInterval = setInterval(() => {
                if (referenceAnimationInstance.current) {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                    referenceAnimationInstance.current(getAnimationSettings(0.1, 0.3));
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                    referenceAnimationInstance.current(getAnimationSettings(0.7, 0.9));
                }
            }, 300) as unknown as number;

            setTimeout(() => {
                clearInterval(animationInterval);
            }, animationTime);
        };

        startAnimation();

        return () => {
            clearInterval(animationInterval);
        };
    }, []);

    return <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />;
};

export default ConfettiAnimation;
