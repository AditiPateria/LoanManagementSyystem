import { Schema, model } from 'mongoose';

const loanSchema = new Schema({
  applicant: { type: String, required: true },
  purpose: { type: String, required: true },
  amount: { type: Number, required: true },
  interestRate: { type: Number, required: true },
  duration: { type: Number, required: true }, // In months
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' }
});

export const Loan = model('Loan', loanSchema);
