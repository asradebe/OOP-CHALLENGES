class DiceFactory{
    constructor(){
        this.sixSidedDice = [];
    };
    makeDie(){
        for(let i = 1; i < 7; i++){
            this.sixSidedDice.push(i);
        };
        let dice = this.sixSidedDice;
        return dice;
    };
};

class DiceTester{
	testDie(){
		let die = new DiceFactory();
		die.makeDie();
		for(let i = 1; i < die.sixSidedDice.length; i++){
			if(die.sixSidedDice[i - 1] != i){
				throw "dice not fair"
			};
		};
		return true;
	};
};
let DieTest = new DiceTester();
DieTest.testDie();