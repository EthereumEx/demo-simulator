pragma solidity ^0.4.0;

import 'NotificationService.sol';

contract Booking is usingNotificationService {

  address seller = 0x47aba09257C91E015903F1608B2B4Ed245ed8264;
  address buyer = 0xC4c48A2E214f69b256edE4F5fAfec5C6E896Fe07;
  uint buyerPrice;
  uint sellerPrice;
  string referenceId;
  int public contractState;   //Dispute = -1, Incomplete = 0, Agreed = 1,

  NotificationService ns = getNotificationService();

  function Booking(string _referenceId) {
    referenceId = _referenceId;
    contractState = 0;
  }

  function updateBookingPrice(address sender, uint price) returns (int) {
    if (sender != seller && sender != buyer) {
        throw;
    }

    if(seller == sender) {
        sellerPrice = price;
    }
    else if(buyer == sender) {
        buyerPrice = price;
    }

    compareBookingPrice();
    ns.contractState(referenceId, seller, buyer, buyerPrice, sellerPrice, contractState, now);
    return contractState;
  }

  function compareBookingPrice() private {
    if (sellerPrice == 0 || buyerPrice == 0) {
      contractState = 0;
    }
    else if (diff(sellerPrice, buyerPrice) < 250) {
      contractState = 1;
    }
    else {
      contractState = -1;
    }
  }

  function diff(uint a, uint b) private returns (uint) {
    int diff = int(a - b);

    if (diff > 0) {
        return uint(diff);
    } else {
        return uint(-1 * diff);
    }
  }
}
