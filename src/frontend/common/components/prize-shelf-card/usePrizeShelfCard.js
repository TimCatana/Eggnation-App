import {
  FIRST_HALF_SHELF,
  FULL_SHELF,
  SECOND_HALF_SHELF,
} from '../../../util/ShelfImageConstants';

import firstHalfShelf from '../../../../../assets/bookshelf/firstHalfShelf.png';
import secondHalfShelf from '../../../../../assets/bookshelf/secondHalfShelf.png';
import fullShelf from '../../../../../assets/bookshelf/fullShelf.png';

import phoneImage from '../../../../../assets/items/phone.png';
import earBudsImage from '../../../../../assets/items/earbuds.png';
import hoodieImage from '../../../../../assets/items/hoodie.png';
import laptopImage from '../../../../../assets/items/laptop.png';
import cashImage from '../../../../../assets/items/cash.png';
import tabletImage from '../../../../../assets/items/tablet.png';
import shirtImage from '../../../../../assets/items/shirt.png';
import presentImage from '../../../../../assets/items/present.png';

const usePrizeShelfCard = () => {
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

  /**
   * Gets the background image to display.
   * @param bgShelfImage The constant representing which background shelf image to display 
   * @returns 
   */
  const getShelfImage = bgShelfImage => {
    switch (bgShelfImage) {
      case FIRST_HALF_SHELF:
        return firstHalfShelf;
      case SECOND_HALF_SHELF:
        return secondHalfShelf;
      case FULL_SHELF:
        return fullShelf;
      default:
        return fullShelf;
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
