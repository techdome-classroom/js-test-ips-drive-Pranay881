const smallestMissingPositiveInteger = require('./program1');
const assert = require("assert");


describe("Test cases for Smallest Positive Integer function", function () {

    const smallestMissingPositiveInteger = (nums) => {
        const positiveNums = nums.filter(num => num > 0);
        positiveNums.sort((a, b) => a - b);
        let smallestMissing = 1;
        for (const num of positiveNums) {
            if (num === smallestMissing) {
                smallestMissing++;
            } else if (num > smallestMissing) {
                break;
            }
        }
        return smallestMissing;
    };

    it("Returns 2 for [3,4,-1,1]", function () {
        const result = smallestMissingPositiveInteger([3, 4, -1, 1]);
        assert.equal(result, 2);
    });

    it("Returns 3 for [1, 2, 0]", function () {
        const result = smallestMissingPositiveInteger([1, 2, 0]);
        assert.equal(result, 3);
    });

    it("Returns 1 for [-1, -3, 4, 2]", function () {
        const result = smallestMissingPositiveInteger([-1, -3, 4, 2]);
        assert.equal(result, 1);
    });


});
