const getCompileTime = () => {
  console.log('Автор: Наживотов Олександр');
  console.log('Дата та час компiляцii', new Date());
};

function rot(a, b, c) {
  return (b[0] - a[0]) * (c[1] - b[1]) - (b[1] - a[1]) * (c[0] - b[0]);
}

function f(b, c) {
  r = rot(a[start], a[b], a[c]);
  if (r != 0) return -r;
  else {
    db = Math.abs(a[start][0] - a[b][0]) + Math.abs(a[start][1] - a[b][1]);
    dc = Math.abs(a[start][0] - a[c][0]) + Math.abs(a[start][1] - a[c][1]);
    return dc - db;
  }
}

function grahamscan(a) {
  n = a.length;
  p = new Array();
  for (j = 0; j < n; j++) p[j] = j;
  for (j = 0; j < n; j++)
    if (
      a[p[j]][0] < a[p[0]][0] ||
      (a[p[j]][0] == a[p[0]][0] && a[p[j]][1] < a[p[0]][1])
    )
      [p[j], p[0]] = [p[0], p[j]];
  start = p.shift();
  p.sort(f);
  s = new Array(start, p[0]);

  for (j = 2; j < n; j++) {
    line = rot(a[0], a[1], a[j]) == 0;
    if (!line) break;
  }
  if (line) return s;
  n1 = n - 1;

  for (j = 1; j < n1; j++) {
    while (rot(a[s[s.length - 2]], a[s[s.length - 1]], a[p[j]]) < 0) s.pop();
    s.push(p[j]);
  }
  return s;
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

console.log(grahamscan(a));
getCompileTime();
