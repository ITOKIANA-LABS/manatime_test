import Sold from "../entities/Sold";
import User from "../entities/User";

const users: User[] = [
  {
    id: 1,
    firstName: 'Marlon',
    lastName: 'Brandon',
  },
  {
    id: 2,
    firstName: 'Darlène Manson',
    lastName: 'Dujon',
  },
];

let solds: Sold[] = [];

export const fetchSolds = async (query= ""): Promise<Sold[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const filteredSolds = solds.filter((sold) => 
    sold?.user?.firstName.toLowerCase().includes(query.toLowerCase())
  );


  return [...filteredSolds];
}

export const fetchUsers = async (): Promise<User[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return users;
}

export const addSold = async (sold: Sold): Promise<Sold> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newSold: Sold = {
    id: solds.length > 0 ? solds[solds.length - 1].id + 1:1,
    user: sold.user,
    category: sold.category,
    period: sold.period,
    actualSold: sold.actualSold,
    gotSold: sold.gotSold,
    futurSold: sold.futurSold,
  };

  solds.push(newSold);

  return newSold;
}

export const deleteSold = async (idSold: number): Promise<any> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  solds = solds.filter((sold) => sold.id !== idSold);

  return {
    message: "Removed with success"
  };
} 