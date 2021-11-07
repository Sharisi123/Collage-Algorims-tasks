const getCompileTime = () => {
  console.log('Автор: Наживотов Олександр');
  console.log('Дата та час компiляцii', new Date());
};

function rot(a, b, c) {
  return (b[0] - a[0]) * (c[1] - b[1]) - (b[1] - a[1]) * (c[0] - b[0]);
}

function jarvis(a) {
  n = a.length;

  p = new Array();
  for (j = 0; j < n; j++) p[j] = j;
  for (j = 0; j < n; j++)
    if (
      a[p[j]][0] < a[p[0]][0] ||
      (a[p[j]][0] == a[p[0]][0] && a[p[j]][1] < a[p[0]][1])
    )
      [p[j], p[0]] = [p[0], p[j]];
  h = new Array();
  h.push(p[0]);
  line = true;
  dj = Math.abs(a[0][0] - a[1][0]) + Math.abs(a[0][1] - a[1][1]);
  j = 1;
  for (i = 2; i < n; i++) {
    line = rot(a[p[0]], a[p[1]], a[p[i]]) == 0;
    di = Math.abs(a[p[0]][0] - a[p[i]][0]) + Math.abs(a[p[0]][1] - a[p[i]][1]);
    if (dj < di) {
      j = i;
      dj = di;
    }
    if (!line) break;
  }
  if (line) {
    h.push(p[j]);
    return h;
  }

  p.shift();
  p.push(h[0]);

  while (true) {
    right = 0;
    for (j = 1; j < p.length; j++)
      if (rot(a[h[h.length - 1]], a[p[right]], a[p[j]]) < 0) right = j;
    if (p[right] == h[0]) break;
    else {
      h.push(p[right]);
      p.splice(right, 1);
    }
  }
  return h;
}
a = [
  [110, 66],
  [88, 108],
  [88, 30],
  [85, 83],
  [60, 72],
  [53, 45],
  [32, 72],
  [39, 108],
  [11, 58],
  [25, 8],
];

console.log(jarvis(a));
getCompileTime();
