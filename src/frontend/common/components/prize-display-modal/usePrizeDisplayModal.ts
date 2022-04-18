import {
  cash,
  earbuds,
  hoodie,
  laptop,
  phone,
  present,
  shirt,
  tablet,
} from '../../../../../assets';

const usePrizeDisplayModal = () => {
  /**
   * Gets the image to display.
   * @param prizeType (string) The string representing the prizeType
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

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    getDisplayImage,
  };
};

export default usePrizeDisplayModal;
