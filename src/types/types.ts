export type BudgetType = {
  amount: number;
  spent: number;
  category_name: string;
  category_id: number;
};

export type IncomeInfoType = {
  count: number;
  incomes: IncomeType[] | null;
  limit: number;
  offset: number;
};

export type IncomeType = {
  id: number;
  date: string;
  amount: number;
  description: string;
  account_id: number;
  account_name: string;
  created_at: string;
};

export type ExpenseInfoType = {
  count: number;
  expenses?: ExpenseType[] | null;
  limit: number;
  offset: number;
};
export type ExpenseType = {
  id: number;
  date: string;
  category: string;
  category_id: number;
  expense: number;
  description: string;
  method: string;
  originalAmount: number;
  account_id: number;
  account_type: string;
};

export type DebtorsListType = { debtors: DebtorType[] };

export type DebtorType = {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  description: string;
};


