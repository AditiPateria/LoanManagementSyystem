import { Router } from 'express';
import { getLoans, createLoan, updateLoan, deleteLoan } from './loancontroller';

const router = Router();

// Get all loans
router.get('/loans', getLoans);

// Create a new loan
router.post('/loans', createLoan);

// Update a loan
router.put('/loans/:id', updateLoan);

// Delete a loan
router.delete('/loans/:id', deleteLoan);

export default router;

