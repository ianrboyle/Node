const superheroes = require('superheroes');

superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]

const mySuperHeroName = superheroes.random();
//=> 'Spider-Ham'

console.log(mySuperHeroName);


const supervillains = require('supervillains');

supervillains.all;
//=> ['Abattoir', 'Able Crown', …]

const mySuperVillain = supervillains.random();
//=> 'Mud Pack'

console.log(mySuperVillain);
