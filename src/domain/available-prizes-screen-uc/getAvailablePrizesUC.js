import deGetAllAvailablePrizes from '../../backend/database/firestore/deGetAllAvailablePrizes';
import {SUCCESS, ERROR} from '../../frontend/util/ResultsConstants';

const getAvailablePrizesUC = async () => {
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
    return {status: ERROR, data: [], message: 'failed to fetch prizes'};
  }
};

export default getAvailablePrizesUC;
