export interface Resource {
  id: string;
  title: string;
  description: string;
  image: string;
  active: boolean;
  priceMember: number;
  priceNoneMember: number;
  manualApprove: boolean;
  availability: string[]; // !TODO: other format
  notAvailable: string[]; // !TODO: other format
}


// mo, tu, we, th, fr, sa, su
