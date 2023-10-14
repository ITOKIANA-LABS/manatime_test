import User from "./User";

type Sold = {
  id: number;
  user?: User;
  category: string;
  period: string;
  actualSold: number;
  gotSold: number;
  futurSold: number;
}

export default Sold;