import * as constants from "./constants";
import * as actions from "./balance";

it("creates an action to set the balance", () => {
  //mock payload
  const balance = 0;
  //create the action object: type + payload
  const expectedAction = { type: constants.SET_BALANCE, balance };
  expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it("creates and action to deposit into the balance", () => {
  //mock payload
  const deposit = 10;
  //create the action object: type + payload
  const expectedAction = { type: constants.DEPOSIT, deposit };
  expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it("creates an action to withraw from the balance", () => {
  const withdrawl = 10;
  const expectedAction = { type: constants.WITHDRAW, withdrawl };
  expect(actions.withdraw(withdrawl)).toEqual(expectedAction);
});
