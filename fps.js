// frames(1, 1) -> 60
// frames(10, 25) -> 15000

const frames = (seconds, frames, fps = 60) => fps * seconds * frames;

console.log(frames(10,25))