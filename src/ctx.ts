let canvas = document.querySelector('canvas') as HTMLCanvasElement;

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

export default ctx;
