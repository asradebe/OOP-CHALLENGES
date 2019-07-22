describe("Dice", function(){
	it("should make a six sided dice", function() {
		let DieTest = new DiceFactory();
		DieTest.makeDie();
		expect(DieTest.sixSidedDice.length).toEqual(6);
	});
	it("should return true if dice is fair", function() {
		let DieTest = new DiceTester();
		expect(DieTest.testDie()).toBeTruthy();
	});
});