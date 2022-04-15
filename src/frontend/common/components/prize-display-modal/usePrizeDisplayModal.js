import phoneImage from '../../../../../assets/items/phone.png';
import earBudsImage from '../../../../../assets/items/earbuds.png';
import hoodieImage from '../../../../../assets/items/hoodie.png';
import laptopImage from '../../../../../assets/items/laptop.png';
import cashImage from '../../../../../assets/items/cash.png';
import tabletImage from '../../../../../assets/items/tablet.png';
import shirtImage from '../../../../../assets/items/shirt.png';
import presentImage from '../../../../../assets/items/present.png';


const usePrizeDisplayModal = () => {
  /**
   * Gets the image to display.
   * @param prizeType The string representing the prizeType
   * @returns
   */
  const getDisplayImage = prizeType => {
    switch (prizeType) {
      case 'phone':
        return phoneImage;
      case 'tablet':
        return tabletImage;
      case 'laptop':
        return laptopImage;
      case 'earbuds':
        return earBudsImage;
      case 'shirt':
        return shirtImage;
      case 'hoodie':
        return hoodieImage;
      case 'cash':
        return cashImage;
      default:
        return presentImage;
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
