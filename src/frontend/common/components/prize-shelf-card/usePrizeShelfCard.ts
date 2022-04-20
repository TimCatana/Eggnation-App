import {
  SI_FULL_SHELF,
  SI_FIRST_HALF_SHELF,
  SI_SECOND_HALF_SHELF,
} from '../../../../constants/Constants';

import {
  singleShelfFirstHalf,
  singleShelfSecondHalf,
  singleShelfFull,
  cash,
  earbuds,
  hoodie,
  laptop,
  phone,
  present,
  shirt,
  tablet,
} from '../../../../../assets';

const usePrizeShelfCard = () => {
  /**
   * Gets the image to display.
   * @param prizeType The string representing the prizeType
   * @returns
   */
  const getDisplayImage = (prizeType: string) => {
    switch (prizeType) {
      case 'phone':
        return phone;
      case 'tablet':
        return tablet;
      case 'laptop':
        return laptop;
      case 'earbuds':
        return earbuds;
      case 'shirt':
        return shirt;
      case 'hoodie':
        return hoodie;
      case 'cash':
        return cash;
      default:
        return present;
    }
  };

  /**
   * Gets the background image to display.
   * @param bgShelfImage  The constant representing which background shelf image to display
   * @returns
   */ // todo, make the type of param  FIRST_HALF_SHELF | FULL_SHELF | SECOND_HALF_SHELF
  const getShelfImage = (bgShelfImage: string) => {
    switch (bgShelfImage) {
      case SI_FIRST_HALF_SHELF:
        return singleShelfFirstHalf;
      case SI_SECOND_HALF_SHELF:
        return singleShelfSecondHalf;
      case SI_FULL_SHELF:
        return singleShelfFull;
      default:
        return singleShelfFull;
    }
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    getDisplayImage,
    getShelfImage,
  };
};

export default usePrizeShelfCard;
