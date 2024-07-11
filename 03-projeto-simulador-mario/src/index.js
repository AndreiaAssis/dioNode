const player1 = {
    NOME : "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const player2 ={
    NOME : "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result;
  
    switch (true) {
      case random < 0.33:
        result = "RETA";
        break;
      case random < 0.66:
        result = "CURVA";
        break;
      default:
        result = "CONFRONTO";
    }
  
    return result;
}

async function logRollResult(characterName, block, diceResult, attribuite){
    
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribuite} = ${diceResult + attribuite} `);
}

async function playRaceEngine(character1, character2){
    for(let round = 1; round <= 5; round ++){
        console.log(`🏁 Rodada ${round}`);

        //sortear bloco
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`);
        
    // rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //teste de habilidade
    let totalTesteSkill1 = 0;
    let totalTesteSkill2 = 0;

    if(block === "RETA"){
        totalTesteSkill1 = diceResult1 + character1.VELOCIDADE;
        totalTesteSkill2= diceResult2 + character2.VELOCIDADE;

        await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE);
        await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE);
    }

    if(block === "CURVA"){
        totalTesteSkill1 = diceResult1 + character1.MANOBRABILIDADE;
        totalTesteSkill2= diceResult2 + character2.MANOBRABILIDADE;

        await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
        await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
    }

    if(block === "CONFORTO"){
       let powerResult1 = diceResult1 + character1.PODER;
       let powerResult2 = diceResult2 + character2.PODER;

       console.log(`${character1.NOME} confronou com ${character2.NOME}! 🥊`);

       await logRollResult(character1.NOME, "poder", diceResult1, character1.PODER);
       await logRollResult(character2.NOME, "poder", diceResult2, character2.PODER);

       if(powerResult1 > powerResult2 && Character2.PONTOS > 0){
            console.log(`${character1.NOME} venceu o confonto! ${character2.NOME} perdeu 1 ponto 🐢`);
            character2.PONTOS--;
       }

       if(powerResult2 > powerResult1 && Character1.PONTOS > 0){
            console.log(`${character1.NOME} venceu o confonto! ${character2.NOME} perdeu 1 ponto 🐢`);
            character1.PONTOS--;
        }

    //    character2.PONTOS -= powerResult1 > powerResult2 && Character2.PONTOS > 0 ? 1 : 0;
    //    if(powerResult1 > powerResult2){
    //     if(character2.PONTOS > 0){
    //         character2.PONTOS--;
    //     }       
    //    }

    //    character1.PONTOS -= powerResult2 > powerResult1 && Character1.PONTOS > 0 ? 1 : 0;
    //    if(powerResult2 > powerResult1){
    //     if(character1.PONTOS > 0){
    //         character1.PONTOS--;
    //     }       
    //    }

       console.log(owerResult1 === powerResult2 ? "Confronto empatado! Nenhum ponto foi perdido" : "");

    //    if(powerResult1 === powerResult2){
    //     console.log("Confronto empatado! Nenhum ponto foi perdido");     
    //    }
    }

    //verificando o vencedor

    if(totalTesteSkill1 > totalTesteSkill2){
        console.log(`${character1.NOME} marcou um ponto!`);
        character1.PONTOS++;
    }else if(totalTesteSkill2 > totalTesteSkill1){
        console.log(`${character2.NOME} marcou um ponto!`);
        character1.PONTOS++;
    }

    console.log("-------------------------------------");

    }
}

async function declareWinner(character1, character2){
    console.log("Resultado final:");
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

    if (character1.PONTOS > character2.PONTOS)
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
      else if (character2.PONTOS > character1.PONTOS)
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
      else console.log("A corrida terminou em empate");
}

(async function main(){
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`);

   await playRaceEngine(player1, player2); //o await faz uma função esperar a outra
   await declareWinner(player1, player2);
})() //função no JavaScript auto invocada

//main();