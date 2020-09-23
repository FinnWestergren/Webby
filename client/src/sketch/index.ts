import p5 from "p5";

export default function sketch(p: p5): void {

	p.setup = function (): void {
		p.createCanvas(500, 500);
	};

	p.draw = function (): void {
        p.ellipse(200,200,200,200);
	};
}
