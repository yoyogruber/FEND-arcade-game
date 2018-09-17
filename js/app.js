// Enemies our player must avoid
var Enemy = function(x,y, speed=1) {
    this.x= x;
    this.y= y;
    this.location = (x,y);
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    this.x += 100*this.speed*dt;
    // which will ensure the game runs at the same speed for
    // all computers.

    // collision detection goes here
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function (x,y){
this.x = x;
this.y = y;
this.sprite = 'images/char-boy.png';
};
var playerPosX;
var playerPosY;
Player.prototype.update =function(){
    playerPosX= this.x;
    playerPosY = this.y;

 }

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x , this.y);

}
Player.prototype.handleInput = function(pressedKeys){
    if (pressedKeys === 'left' && this.x > 33){
        this.x -=100;
    }
    if (pressedKeys === 'right' && this.x < 400){
        this.x +=100;
    }
    if (pressedKeys === 'up' && this.y > 18){
        this.y -=80;
    }
    if (pressedKeys === 'down' && this.y < 380){
        this.y +=80;
    }

}

// possible X-axis positions on board
var columns = [ -5, -100, -200, -300, -400];
var enemyX;

// possible Y-axis positions on board
var rows = [ 60, 140, 220];
var enemyY;

var enemySpeed;

// this is to randomly pick locations for bugs
setInterval(function instances(){
    enemyX = columns[Math.floor(Math.random() * 5)],
    enemyY = rows[Math.floor(Math.random() * 3)],
    enemySpeed = Math.floor(Math.random() * 15),
    allEnemies.push(new Enemy(enemyX, enemyY, enemySpeed)); 
},500)
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(-8, 60, 3), new Enemy (0, 140, 10), new Enemy (-5, 300, 15)];

// Player Object is assigned a variable
var player = new Player (200, 300);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
