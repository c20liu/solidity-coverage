/* eslint-env node, mocha */
/* global artifacts, contract */
const Expensive = artifacts.require('./Expensive.sol');

contract('Expensive', () => {
  it('should deploy', () => Expensive.deployed());
});
