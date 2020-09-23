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
        const center = -0.5 * radius;
        p.push();
        p.fill(155 - (radius * 0.5) , 155 - radius, 155 - radius);
        p.translate(p.mouseX, p.mouseY);
        p.rect(center, center, radius, radius);
        p.pop();
        drawDebugSection([
            { key: "radius", value: Math.floor(radius) },
            { key: "cycleTime", value: cycleTime },
            { key: "ellapsedTime", value: ellapsedTime() / 1000}
        ]);
    };

    const drawDebugSection = (infoToDisplay: { key: string, value: number | string }[]) => {
        p.rect(0,0,200,100);
        infoToDisplay.forEach((data, index) => {
            p.text(data.key, 10, 20 * (index + 1))
            p.text(data.value, 100, 20 * (index + 1))
         })
    }

    const ellapsedTime = () => (new Date()).getTime() - startTime;

    const getRadius = () =>  Math.sin(Math.PI * ellapsedTime() / cycleTime) * 100;
    
}
