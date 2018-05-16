export function randomColor() {
  let color = 'rgb(';
  for (let i = 0; i <= 2; i++) {
    color += Math.floor(Math.random() * 256);
    color += i === 2 ? ')' : ', ';
  }
  return color;
}

