pragma solidity ^0.4.0;

import 'Booking.sol';

contract BookingFactory {
    mapping(string => address) bookings;

    function updateBooking(string referenceId, uint price) {
        Booking booking = Booking(getOrCreateBooking(referenceId));
        booking.updateBookingPrice(msg.sender, price);
    }

    function createBooking(string referenceId) private returns (address) {
        address bookingAddr = new Booking(referenceId);
        bookings[referenceId] = bookingAddr;
        return bookingAddr;
    }

    function getOrCreateBooking(string referenceId) private returns (address) {
        address bookingAddr = getBooking(referenceId);
        if(bookingAddr == 0) {
            bookingAddr = createBooking(referenceId);
        }
        return bookingAddr;
    }

    function getBooking(string referenceId) private returns (address) {
        return bookings[referenceId];
    }
}
