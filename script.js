function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.exp = 0;
}

Player.prototype.gainXp = function (xp) {
  this.exp += xp

  if (this.exp >= 10) {
    this.lvl++
    this.exp -= 10
  }
  
  console.log(this.describe());
}

Player.prototype.describe = function () {
  return `${this.name} is level ${this.lvl} with ${this.exp} experience points.`
}


const player1 = new Player('enfeeble')
const player2 = new Player('ravena')

player1.gainXp(6)
player2.gainXp(5)
player1.gainXp(3)
player2.gainXp(2)
player1.gainXp(7)
player2.gainXp(5)
player1.gainXp(9)
player2.gainXp(2)