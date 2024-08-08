export interface IBid {
  date: any;
  bid_Id: string;
  description: string;
  count:number;
  status: string;
}

export interface ICreateAuctionPayload {
  bidId: string;
  bidDescription: string;
  itemDescription: string;
  startingAmount: number;
  endDate: any;
  bidRequirements: string[];
  categories: string[];
  itemImg: any;
}