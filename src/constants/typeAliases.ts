type SUCCESS = 200;
type ERROR = 500;

export type Result = {
  status: ERROR | SUCCESS;
  data?: any;
  message: string;
};

/**********************/
/***** WON PRIZES *****/
/**********************/

export type WonPrize = {
  prizeId: string;
  prizeWinnerId: string;
  prizeTitle: string;
  prizeDesc: string;
  prizeType: string;
  prizeTier: string;
  prizeClaimType: string;
  prizeWonDate: string;
  prizeClaimed: boolean;
  prizeDelivered: boolean;
};

export type WonPrizesArray = {
  prizeId: string;
  prizeWinnerId: string;
  prizeTitle: string;
  prizeDesc: string;
  prizeType: string;
  prizeTier: string;
  prizeClaimType: string;
  prizeWonDate: string;
  prizeClaimed: boolean;
  prizeDelivered: boolean;
}[];

/****************************/
/***** AVAILABLE PRIZES *****/
/****************************/

export type AvailablePrize = {
  prizeId: string;
  prizeTitle: string;
  prizeDesc: string;
  prizeType: string;
  prizeTier: string;
  prizeClaimType: string;
};

export type AvailablePrizesArray = {
  prizeId: string;
  prizeTitle: string;
  prizeDesc: string;
  prizeType: string;
  prizeTier: string;
  prizeClaimType: string;
}[];

/**************************/
/***** CONTEST PRIZES *****/
/**************************/

export type ContestPrize = {
  prizeId: string;
  prizeTitle: string;
  prizeDesc: string;
  prizeType: string;
  prizeTier: string;
  prizeClaimType: string;
};

export type ContestPrizeArray = {
  prizeId: string;
  prizeTitle: string;
  prizeDesc: string;
  prizeType: string;
  prizeTier: string;
  prizeClaimType: string;
}[];

/*********************************/
/***** COUNTRIES AND REGIONS *****/
/*********************************/

export type Countries = {
  name: string;
  countryShortCode: string;
  // postalCodeFormat: string;
  // regions: Regions;
}[];

export type Country = {
  name: string;
  countryShortCode: string;
  // postalCodeFormat: string;
  // regions: Regions;
};

export type Regions = {
  name: string;
  shortCode?: string;
}[];

export type Region = {
  name: string;
  shortCode?: string;
};
