const mocha = require('mocha')
const chai = require('chai')

const {LogicScore} = require('../service/score/logic')
const expect = chai.expect

describe('score', function () {
    
    it('expect score test user was added', () => {
        let sc = new LogicScore().addScoreFoodLogic(25, 3)
        expect(sc).to.equal(50)
    })
})