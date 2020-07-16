var identity = function (arg) {
    return arg;
};
var identity1 = function (arg) {
    return arg;
};
var identity2 = function (arg) {
    return arg;
};
identity2('2');
var identity3 = function (arg) {
    return arg.length;
};
identity3('2');
var identity4 = function (arg) {
    console.log(arg.length);
    return arg;
};
identity4([1, 2]);
var identity5 = function (arg) {
    console.log(arg.length);
    return arg;
};
