

class Character {

    constructor(name) {
        this.name = name;
    }

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;


    get life () {
        return this._life;
    }
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }

}

class Knight extends Character {

    constructor (name) {
        super(name);
        this.maxLife = 100;
        this.life = this.maxLife;
        this.attack = 200;
        this.defense = 2;
    }
}

class Sorcerer extends Character {

    constructor (name) {
        super(name);
        this.maxLife = 80;
        this.life = this.maxLife;
        this.attack = 200;
        this.defense = 2;
    }
}

class BigMonster extends Character {
    constructor() {
        super("Big Monster");
        this.maxLife = 140;
        this.life = this.maxLife;
        this.attack = 200;
        this.defense = 2;
    }
}

class LittleMonster extends Character {

    constructor() {
        super("Litte Monster");
        this.maxLife = 90;
        this.life = this.maxLife;
        this.attack = 200;
        this.defense = 2;
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    }

    start() {
        // Fighter 1
        this.fighter1El.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter1, this.fighter2))

        document.addEventListener("keyup", (e) => {
            if (e.key === "d") {
                this.doAttack(this.fighter1, this.fighter2);
            }
        })

        //Fighter 2
        this.fighter2El.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter2, this.fighter1));

        document.addEventListener("keyup", (e) => {
            if (e.key === "l") {
                this.doAttack(this.fighter2, this.fighter1);
            }
        })


        this.update();
     
    }

    update() {
        //fighter 1
        this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
            //formatando a vida do personagem
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector(".bar").style.width = `${f1Pct}%`;


        //fighter 2
        this.fighter2El.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)}`;
            //formatando o Vida do personagem
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector(".bar").style.width = `${f2Pct}%`;

    }

    doAttack(attacking, attacked) {

        if(attacking.life <= 0 || attacked.life <= 0) {
            console.log("Atacando cachorro morto");
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        console.log(`ataque do ${attacking.name} = ${attackFactor}`)
        let defenseFactor = (Math.random() * 2).toFixed(2);
        console.log(`defesa do ${attacked.name} = ${defenseFactor}`)


        let newAttack = (attacking.attack * attackFactor).toFixed(2);
        let newDefense = (attacked.defense * defenseFactor).toFixed(2);

        if(newAttack >= newDefense) {
            attacked.life -= newAttack;
            console.log(`${attacking.name} causou ${newAttack} em ${attacked.name}`)
            console.log(newAttack)
            console.log(newDefense)

        } else{
            console.log(`${attacked.name} conseguiu defender com ${newDefense}`);
            console.log(newAttack)
            console.log(newDefense)
        }


        this.update()

        console.log("---------------------------------------------------------------------------------------------------------------")
    }



}