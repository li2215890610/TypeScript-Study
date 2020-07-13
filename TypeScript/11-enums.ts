enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
enum Direction1 {
  Up,
  Down,
  Left,
  Right
}

enum Response1 {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: Response1): void {
  // ...
	console.log(recipient,message)
}

respond("Princess Caroline",10) 



