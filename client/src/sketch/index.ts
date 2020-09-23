import p5 from "p5";

export default function sketch(p: p5): void {
    const bpm = 60;
    const cycleTime = 60000/bpm;
    const startTime = (new Date()).getTime();

	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
	};

	p.draw = () => {
        const radius = getRadius();
        p.ellipse(p.mouseX, p.mouseY, radius, radius);
        drawDebugSection([
            { key: "radius", value: radius },
            { key: "cycleTime", value: cycleTime },
            { key: "ellapsedTime", value: ellapsedTime() }
        ]);
    };

    const drawDebugSection = (infoToDisplay: { key: string, value: number | string }[]) => {
        p.rect(0,0,500,100);
        infoToDisplay.forEach((data, index) => {
            p.text(data.key, 10, 20 * (index + 1))
            p.text(data.value, 100, 20 * (index + 1))
         })
    }

    const ellapsedTime = () => (new Date()).getTime() - startTime;

    const getRadius = () => {
        return (cycleTime * 0.1) - ((ellapsedTime() % cycleTime) * 0.2);
    }
    
}
