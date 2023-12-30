import express from "express";
import{ 
    createaccount,
    deleteAccount,
    depositingMoney,
    getAccountById,
    getAllAccounts,
    updateAccount,
} from "../controllers/accountController.js";


const router = express.Router();

// Route to get all movies
router.get("/", getAllAccounts);

// Route to get a single movie by ID
router.get("/:id", getAccountById);

// Route to create a new movie
router.post("/", createaccount);

// Route to update an existing movie
router.put("/:id", updateAccount);

// Rout to delete a movie
router.delete("/:id", deleteAccount);

// Rout to deposite money
router.put("/:id", depositingMoney);


export default router