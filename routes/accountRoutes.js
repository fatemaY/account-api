import express from "express";
import{ 
    createaccount,
    deleteAccount,
    depositingMoney,
    filterActiveAccountsByCash,
    getAccountById,
    getAllAccounts,
    transfer,
    updateAccount,
    updateCredit,
    withdraw,
} from "../controllers/accountController.js";


const router = express.Router();

// Route to get all movies
router.get("/", getAllAccounts);

// Route to get a single movie by ID
router.get("/:id", getAccountById);

// Route to create a new movie
router.post("/", createaccount);

// Route to update an existing moaccountvie
router.put("/update/:id", updateAccount);

// update account credit
router.put("/update-credit/:id", updateCredit);

// Rout to delete a movie
router.delete("/delete/:id", deleteAccount);

// Rout to deposite money
router.put("/deposit/:id", depositingMoney);

// Rout to withdraw money
router.put("/withdraw/:id", withdraw);

// Rout to transfer money
router.put("/transfer", transfer);

// filter active accounts by cash
router.get("/filter-active-by-cash/:cash", filterActiveAccountsByCash);





export default router