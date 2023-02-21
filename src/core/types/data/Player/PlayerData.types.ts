

type PlayerStats = {
    level : number,
    //player health
    maxEnergy : number,
    //mana is  used casting spells
    maxMana : number,
    //higher speed means the player can walk/run faster
    speed : number,
    //hiegher jumpPower means player can jump higher
    jumpPower : number,
    //higher intution means better spell casting
    intuition : number
}


type PlayerData = {
    exp : number,
    stats : PlayerStats,
    spells : string[],
    
}