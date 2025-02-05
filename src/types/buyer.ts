export type Buyer = {
  id: string;
  name: string;
  location: string;
  experienceTypes: string[];
  interestedIndustries: string[];
  businessModels: string[];
  dealStructures: string[];
  investmentRange: string;
  keyPeople: {
    name: string;
    role: string;
    image: string;
  }[];
  companyImage: string;
  introduction: string;
};