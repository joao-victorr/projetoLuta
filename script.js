//Selecioine seu personagem:
let char = new Knight("Nickname")

//selecione o monstro:
let monster = new BigMonster()

const stage = new Stage(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster")
);

stage.start();
