import {
  cash,
  earbuds,
  hoodie,
  laptop,
  phone,
  present,
  shirt,
  tablet,
} from '../../../../../../assets';
import {
  S_PT_CASH,
  S_PT_EARBUDS,
  S_PT_HOODIE,
  S_PT_LAPTOP,
  S_PT_PHONE,
  S_PT_SHIRT,
  S_PT_TABLET,
} from '../../../../../constants/Strings';

const usePrizeDisplayModal = () => {
  /**
   * Gets the image to display.
   * @param prizeType (string) The string representing the prizeType
   * @returns
   */
  const getDisplayImage = (prizeType: string) => {
    switch (prizeType) {
      case S_PT_PHONE:
        return phone;
      case S_PT_TABLET:
        return tablet;
      case S_PT_LAPTOP:
        return laptop;
      case S_PT_EARBUDS:
        return earbuds;
      case S_PT_SHIRT:
        return shirt;
      case S_PT_HOODIE:
        return hoodie;
      case S_PT_CASH:
        return cash;
      default:
        return present;
    }
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    getDisplayImage,
  };
};

export default usePrizeDisplayModal;
