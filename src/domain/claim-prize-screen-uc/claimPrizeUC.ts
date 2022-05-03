import doGetUserId from '../../backend/auth/doGetUserId';
import doSendMeEmail from '../../backend/cloud-functions/doSendMeEmail';
import doUpdatePrizeClaimedValue from '../../backend/database/firestore/doUpdatePrizeClaimedValue';
import doGetWonPrize from '../../backend/database/firestore/doGetWonPrize';
import {ERROR, SUCCESS} from '../../constants/ResultsConstants';
import {Result} from '../../constants/typeAliases';
import printDevLogs from '../printDevLogs';
import {
  PCT_DELIVERABLE,
  PCT_NONE,
  PCT_TRANSFER,
} from '../../constants/Constants';

/**
 * @returns
 * TODO Finish this
 */
const claimPrizeUC = async (
  prizeClaimType: string,
  prizeId: string,
  country: string,
  region: string,
  address: string,
  postalCode: string,
  paypalEmail: string,
): Promise<Result> => {
  const userId = doGetUserId();
  if (!userId) {
    return {
      status: ERROR,
      data: null,
      message: 'Failed to claim prize. If error persists please contact us',
    };
  }

  try {
    const prize = await doGetWonPrize(userId, prizeId);

    if (!prize) {
      return {
        status: ERROR,
        data: null,
        message: 'Failed to claim prize. If error persists please contact us',
      };
    }

    if (prize.prizeClaimed) {
      return {
        status: ERROR,
        data: null,
        message: 'This prize has already been claimed.',
      };
    }

    const emailMessage = _createEmailMessage(
      prizeId,
      prizeClaimType,
      country,
      region,
      address,
      postalCode,
      paypalEmail,
    );

    await doSendMeEmail(emailMessage);
    await doUpdatePrizeClaimedValue(userId, prizeId);
    return {status: SUCCESS, data: null, message: ''};
  } catch (e) {
    return _getErrorResponse(e);
  }
};

const _createEmailMessage = (
  prizeId: string,
  prizeClaimType: string,
  country: string,
  region: string,
  address: string,
  postalCode: string,
  paypalEmail: string,
) => {
  let message;

  if (prizeClaimType === PCT_DELIVERABLE) {
    message = `PRIZE ID: ${prizeId}
    
Someone has desired to claim their prize. Their prize is shippable and to be shipped to them Here's what you need to do:

1) Check that the prizeClaimed field for the prize has been set to true. If it has not, then discard this email.
2) If prizeClaimed is true, then ship the prize to the address provided. This is the address given:
3) If the user provided an invalid address, attempt emailing them using their email to see what the address should be. Be weary that they might not speak English
4) Once the prize is shipped, send an email to their email saying that the prize was shipped.
5) Once the prize is shipped to the provided address, we are no longer liable for what happens according to our terms of service.

User Information:
   country: ${country}
   region: ${region}
   address: ${address}
   postal code: ${postalCode}`;
  } else if (prizeClaimType === PCT_TRANSFER) {
    message = `PRIZE ID: ${prizeId}
    
Someone has desired to claim their prize. Their prize is transferable and to be transfered to them via paypal Here's what you need to do:

1) Check that the prizeClaimed field for the prize has been set to true. If it has not, then discard this email.
2) If prizeClaimed is true, then ship the prize to the address provided. This is the address given:
3) contact the user via their email to make sure that they inputted the correct paypal email
4) transfer them the money
5) ensure that the money is transferred, and keep track of any legal or bank statement confirming the transaction

User Information:
  paypal email: ${paypalEmail}`;
  } else if (prizeClaimType === PCT_NONE) {
    message = `PRIZE ID: ${prizeId}
    
Someone has just tried to claim a prize that is not claimable.

User Entered Information:
   country: ${country}
   region: ${region}
   address: ${address}
   postal code: ${postalCode}
   paypal email: ${paypalEmail}`;
  } else {
    message = `PRIZE ID: ${prizeId}
    
Someone has just tried to claim a prize. but the prizeClaimType is invalid.
    
User Entered Information:
   country: ${country}
   region: ${region}
   address: ${address}
   postal code: ${postalCode}
   paypal email: ${paypalEmail}`;
  }

  return message;
};

/**
 * Get's the correct error message to return to the UI.
 * Prints dev logs if in DEV mode.
 * @param error The error
 * @returns {status: ERROR, data: null, message: string}
 */
const _getErrorResponse = (error: any): Result => {
  if (__DEV__) {
    printDevLogs(
      'domain/claim-prize-screen-uc/claimPrizeUC.js',
      'claimPrizeUC',
      `${error}`,
    );
  }

  return {
    status: ERROR,
    data: null,
    message: 'Failed to claim prize. If error persists please contact us',
  };
};

export default claimPrizeUC;
