let i = 1;

function next(){
  i++;
  document.getElementById('img').src =
    `https://picsum.photos/300/200?${i}`;
}

function prev(){
  i = i > 1 ? i - 1 : 1;
  document.getElementById('img').src =
    `https://picsum.photos/300/200?${i}`;
}
