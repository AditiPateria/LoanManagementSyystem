import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Loanform.css';

type LoanFormData = {
  applicant: string;
  purpose: string;
  amount: number;
  interestRate: number;
  duration: number;
  status: string;
};

const LoanForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<LoanFormData>();

  const onSubmit = async (data: LoanFormData) => {
    try {
      await axios.post('http://localhost:3000/api/loans', data);
      reset();  // Reset form after submission
    } catch (error) {
      console.error('Error submitting loan:', error);
    }
  };

  return (
    <form className="loan-form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Applicant</label>
        <input {...register('applicant', { required: true })} />
      </div>
      <div>
        <label>Purpose</label>
        <input {...register('purpose', { required: true })} />
      </div>
      <div>
        <label>Amount</label>
        <input type="number" {...register('amount', { required: true })} />
      </div>
      <div>
        <label>Interest Rate (%)</label>
        <input type="number" {...register('interestRate', { required: true })} />
      </div>
      <div>
        <label>Duration (Months)</label>
        <input type="number" {...register('duration', { required: true })} />
      </div>
      <div>
        <label>Status</label>
        <select {...register('status', { required: true })}>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
      <button type="submit">Submit Loan</button>
    </form>
  );
};

export default LoanForm;
