let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
myFavoriteNumber = true;


// let myFavoriteNumber1: string | number;
// myFavoriteNumber1 = true;

function getLength(something: string | number): number {
  return something.length;
}

function getString(something: string | number): string {
  return something.toString();
}