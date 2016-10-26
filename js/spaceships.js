// Object Literal
var spaceship1 = {
    topSpeed: '2lyph',
    name: 'Galaxy Cruiser',
    launch: function() {
        console.log(this.name + ' launching to inifinity and beyond at ' + this.topSpeed + '!')
    },
    land: function() {
        console.log(this.name + ' has landed!')
    }
}

var spacecraft1 = Object.create(spaceship1)
spacecraft1.topSpeed = '15lyph'
spacecraft1.name = 'Galaxy Falcon'

// Object New
var spaceship2 = new Object()
    spaceship2.topSpeed = '5lyph',
    spaceship2.name = 'Star Speeder',
    spaceship2.launch = function() {
        console.log(this.name + ' launching to inifinity and beyond at ' + this.topSpeed + '!')
    }
    spaceship2.land = function() {
        console.log(this.name + ' has landed!')
    }

var spacecraft2 = Object.create(spaceship2)
spacecraft2.topSpeed = '20lyph'
spacecraft2.name = 'Star Flash'

// Constructor Function
var Spaceship = function() {
    this.topSpeed = '8lyph'
    this.name ='Fast Jumper'
    this.launch = function() {
        console.log(this.name + ' launching to inifinity and beyond at ' + this.topSpeed + '!')
    }
}
var spaceship3 = new Spaceship()

var spacecraft3 = new Spaceship()
spacecraft3.topSpeed = '90lyph'
spacecraft3.name = 'Fast Spaceship'

Spaceship.prototype.land = function() {
    console.log(this.name + ' has landed!')
}

// Class
class Spacecraft {
    constructor(name, topSpeed) {
        this.topSpeed = topSpeed
        this.name = name
    }
    launch() {
        console.log(this.name + ' launching to inifinity and beyond at ' + this.topSpeed + '!')
    }
    land() {
        console.log(this.name + ' has landed!')
    }
}
var spaceship4 = new Spacecraft('Planet Hopper', '10lyph')

class Spacecraft4 extends Spacecraft {
    constructor(name, topSpeed) {
        super('Planet Starz', '16lyph')
    }
}
var spacecraft4 = new Spacecraft4()

// Object Literal
spaceship1.launch()
setTimeout(spaceship1.land.bind(spaceship1), 3000)
spacecraft1.launch()
setTimeout(spaceship1.land.bind(spacecraft1), 3000)


// Object New
spaceship2.launch()
setTimeout(spaceship2.land.bind(spaceship2), 3000)
spacecraft2.launch()
setTimeout(spaceship2.land.bind(spacecraft2), 3000)

// Constructor Function
spaceship3.launch()
setTimeout(spaceship3.land.bind(spaceship3), 3000)
spacecraft3.launch()
setTimeout(spacecraft3.land.bind(spacecraft3), 3000)
//ask

// Class
spaceship4.launch()
setTimeout(spaceship4.land.bind(spaceship4), 3000)
spacecraft4.launch()
setTimeout(spacecraft4.land.bind(spacecraft4), 3000)
