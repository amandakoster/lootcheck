import React from "react";
import { shallow } from "enzyme";
//import and test only the exported not-conencted Wallet the test without redux
import { Wallet } from "./Wallet";

describe("Wallet", () => {
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();
  //remember to add props to each test
  const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw };
  const wallet = shallow(<Wallet {...props} />);

  it("renders properly", () => {
    expect(wallet).toMatchSnapshot();
  });

  it("displays the balance from props", () => {
    //find balance using .find() + classname of h3 node
    //use enzyme .text() to examine text of h3 node
    //.text() will render a string of `balance`
    expect(wallet.find(".balance").text()).toEqual("Wallet balance: 20");
  });

  it("it creates an input to deposit or withdraw from the balance", () => {
    expect(wallet.find(".input-wallet").exists()).toBe(true);
  });

  describe("when the user types into the wallet input", () => {
    const userBalance = "25";

    //add a beforeEach block ismilar to hte button beforeEach.
    //events require a beforeEach to find the input
    beforeEach(() => {
      //find the node
      wallet
        .find(".input-wallet")
        //simulate input onChange with target and value
        .simulate("change", { target: { value: userBalance } });
    });

    it("updates the local wallet balance state and converts the string to a number.", () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });

    describe("the user wnats to make a deposit", () => {
      beforeEach(() => wallet.find(".btn-deposit").simulate("click"));
      it("dispatches the `deposit()` it receives from props with the local balance", () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });

    describe("the user wnats to make a withdrawl", () => {
      beforeEach(() => wallet.find(".btn-withdraw").simulate("click"));
      it("dispatches with `withdraw()` it receives from props with the local balance", () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });


  });
});
