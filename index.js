const canvas = document.querySelector('canvas');
//this is what let's us draw shapes on the screen
const c = canvas.getContext('2d');

//16:9 ratio
canvas.width = 1024;
canvas.height = 576;

//setting canvas background with a bigass rectangle using cooridinates
c.fillRect(0, 0, canvas.width, canvas.height);

//create the player and enemy
//give them velocity and gravity
const gravity = 0.2;

class Sprite {
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;
        this.height = 150
    };

    //this draws the player
    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, 50, this.height);
    };

    // this method updates properties inside the screen
    //sets the sprite velocity to 0 when it hits the bottom of the canvas
    update() {
        this.draw();
        this.position.y += this.velocity.y;
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else {
            this.velocity.y += gravity;
        }
    }
};

// this starts our player at the top left portion of the canvas
const player = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
});

const enemy = new Sprite({
    position: {
        x: 400,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    }
});

console.log(player);

//animation loop
function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.update();
    enemy.update()
};


animate();

//lets get the sprites moving
window.addEventListener('keydown', (event) => {
    console.log(event)
})