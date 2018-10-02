'use strict'

class Player {
  constructor (x, y) {
    this.x = x
    this.y = y
    this.facing = 'left'
    this.moving = false
    this.theta = 0
    this.alive = true
  }
}

module.exports = Player
