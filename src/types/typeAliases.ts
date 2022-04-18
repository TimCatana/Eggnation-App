type SUCCESS = 200;
type ERROR = 500;


/** WON PRIZES */
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

/** AVAILABLE PRIZES */
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

/** CONTEST PRIZES */
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

/** PRIZE TO ADD */
export type PrizeToAdd = {
  prizeId: string;
  prizeTitle: string;
  prizeDesc: string;
  prizeType: string;
  prizeTier: string;
};

export type Result = {
  status: ERROR | SUCCESS,
  data: any,
  message: string,
}
