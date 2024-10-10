import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';
import LoanForm from './LoanForm';

type Loan = {
  _id: string;
  applicant: string;
  purpose: string;
  amount: number;
  interestRate: number;
  duration: number;
  date: string;
  status: string;
};

const Dashboard: React.FC = () => {
  const [loans, setLoans] = useState<Loan[]>([]);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/loans');
        setLoans(response.data);
      } catch (error) {
        console.error('Error fetching loans:', error);
      }
    };
    fetchLoans();
  }, []);

  const deleteLoan = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/loans/${id}`);
      setLoans(loans.filter(loan => loan._id !== id));
    } catch (error) {
      console.error('Error deleting loan:', error);
    }
  };

  return (
    <div className="dashboard">
      <div className="stats">
        <div className="stat-box">
          <h3>{loans.length}</h3>
          <p>Loans</p>
        </div>
      </div>
      <LoanForm />
      <div className="applied-loans">
        <h2>Applied Loans</h2>
        <table>
          <thead>
            <tr>
              <th>Applicant</th>
              <th>Purpose</th>
              <th>Amount</th>
              <th>Interest Rate</th>
              <th>Duration (Months)</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan._id}>
                <td>{loan.applicant}</td>
                <td>{loan.purpose}</td>
                <td>{loan.amount}</td>
                <td>{loan.interestRate}%</td>
                <td>{loan.duration}</td>
                <td>{new Date(loan.date).toLocaleDateString()}</td>
                <td>
                  <span className={`status-${loan.status.toLowerCase()}`}>
                    {loan.status}
                  </span>
                </td>
                <td>
                  <button onClick={() => deleteLoan(loan._id)}>Delete</button>
                  {/* Add edit button later */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;



