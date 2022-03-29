import deGetAllAvailablePrizes from '../backend/database/firestore/deGetAllAvailablePrizes';
import {SUCCESS, FAILURE} from '../frontend/util/Results';

export const getAvailablePrizesUC = async () => {
  try {
    const availablePrizes = await deGetAllAvailablePrizes();

    console.log(availablePrizes);

    if (availablePrizes.length === 0) {
      return {
        status: SUCCESS,
        data: [],
        message: 'No Prizes Available. More Coming Soon!',
      };
    }

    return {status: SUCCESS, data: availablePrizes, message: ''};
  } catch (e) {
    console.log(
      `error getting available prizes... need to show UI error --> ${e}`,
    );
    return {status: FAILURE, data: [], message: 'failed to fetch prizes'};
  }
};
