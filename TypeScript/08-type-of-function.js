function sum(x, y) {
    return x + y;
}
sum(1, 3, 4);
sum(1);
var sumStr = function (s, d) {
    return s + d;
};
sumStr('2', '4');
var sumStr1 = function (s, d) {
    if (d)
        return "" + s + d;
    return s;
};
sumStr1('2', '4');
