import STATUS_CODE from "../constants/statusCodes.js";
import { readAccountsFromFile, writeAccountsToFile } from "../models/accountModel.js";

let next_num= 12 ;

// @des      Get all the movies
// @route    GET /api/v1/movies
// @access   Public
export const getAllAccounts = async (req, res, next) => {
  try {
    const accounts = readAccountsFromFile();
    res.send(accounts);
  } catch (error) {
    next(error);
  }
};

// @des      Get a single movie
// @route    GET /api/v1/movies/:id
// @access   Public
export const getAccountById = async (req, res, next) => {
  try {
    const accounts = readAccountsFromFile();
    const account = accounts.find((acc) => acc.id === parseInt(req.params.id));


    if (!account) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("Account was not found");
    }
    res.send(account);
  } catch (error) {
    next(error);
  }
};

// @des      Create a movie
// @route    POST /api/v1/movies
// @access   Public
export const createaccount = async (req, res, next) => {
  try {
    const { id ,name, cash ,credit } = req.body;
    if (!id ||!name) {
      res.status(STATUS_CODE.BAD_REQUEST);
      throw new Error(
        "All fields (name, id) are required"
      );
    }
    if (cash <0) {
        res.status(STATUS_CODE.BAD_REQUEST);
        throw new Error(
          " The cash must be a positive number "
        );
    }
    if (!(`${id}`.length===9)) {
      res.status(STATUS_CODE.BAD_REQUEST);
      throw new Error(
        " unavailable id "
      );
    }
   
    const accounts = readAccountsFromFile();
    if (accounts.some((acc) => acc.id === id)) {
      res.status(STATUS_CODE.CONFLICT);
      throw new Error("Account with the same id already exists");
    }
    const newAccount = { num:next_num++ , id , name, cash,credit:0 };
    accounts.push(newAccount);
    writeAccountsToFile(accounts);
    res.status(STATUS_CODE.CREATED).send(newAccount);
  } catch (error) {
    res.status(STATUS_CODE.BAD_REQUEST);
    next(error);
  }
};

// @des      Update a movie
// @route    PUT /api/v1/movies/:id
// @access   Public

export const updateAccount = async (req, res, next) => {
  try {
    const { name, cash, credit } = req.body;
    if (!name || cash <0 || credit <0 ) {
      res.status(STATUS_CODE.BAD_REQUEST);
      throw new Error(
        "All fields (name, cash, credit) are required and numbers should be positive"
      );
    }
  
    const accounts = readAccountsFromFile();
    const index = accounts.findIndex(acc=> acc.id === parseInt(req.params.id))
    if(index === -1){
        res.status(STATUS_CODE.NOT_FOUND)
        throw new Error("Account with this Id was not found!")
    }
    
    const updatedAccount = {...accounts[index],name,cash,credit}
    accounts[index] = updatedAccount;
    writeAccountsToFile(accounts)
    res.send(updatedAccount);
  } catch (error) {
    next(error)
  }
};

// @des      delete a movie
// @route    DELETE /api/v1/movies/:id
// @access   Public
export const deleteAccount = async (req, res, next) => {
  try {
    const accounts = readAccountsFromFile();
    const newAccountList = accounts.filter((acc) => acc.id !== parseInt(req.params.id));

    if (newAccountList.length === accounts.length) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("Account was not found");
    }
    writeAccountsToFile(newAccountList);
    res
      .status(STATUS_CODE.OK)
      .send(`Account with the id of ${req.params.id} was deleted!`);
  } catch (error) {
    next(error);
  }
};


export const depositingMoney = async (req, res, next) => {

  try {
    const {money}  = req.body;
    if (money < 0 ) {
      res.status(STATUS_CODE.BAD_REQUEST);
      throw new Error(
          "Only depositing with a positive numbers"
        );
    }
    const accounts = readAccountsFromFile();
    const index = accounts.findIndex(acc=> acc.id === parseInt(req.params.id))
    if(index === -1){
      res.status(STATUS_CODE.NOT_FOUND)
      throw new Error("Account with this id was not found!")
    }
   

    let account=accounts[index]
    account.cash += money;
    accounts[index]=account;
    writeAccountsToFile(accounts)
    res.send(account);
  } catch (error) {
    next(error)
  }
};





const checkPositive = (money) => {
  if (money > 0) {
    return true;
  }
  throw Error("Only positive numbers");
};