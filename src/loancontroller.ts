import { Request, Response } from 'express';
import { Loan } from './Loan';

// Fetch all loans
export const getLoans = async (req: Request, res: Response) => {
  try {
    const loans = await Loan.find();
    res.json(loans);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new loan
export const createLoan = async (req: Request, res: Response) => {
  const { applicant, purpose, amount, interestRate, duration, status } = req.body;
  const newLoan = new Loan({ applicant, purpose, amount, interestRate, duration, status });

  try {
    const savedLoan = await newLoan.save();
    res.status(201).json(savedLoan);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

// Update a loan
export const updateLoan = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { applicant, purpose, amount, interestRate, duration, status } = req.body;

  try {
    const updatedLoan = await Loan.findByIdAndUpdate(id, { applicant, purpose, amount, interestRate, duration, status }, { new: true });
    if (!updatedLoan) return res.status(404).json({ message: 'Loan not found' });
    res.json(updatedLoan);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a loan
export const deleteLoan = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedLoan = await Loan.findByIdAndDelete(id);
    if (!deletedLoan) return res.status(404).json({ message: 'Loan not found' });
    res.json({ message: 'Loan deleted' });
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};


