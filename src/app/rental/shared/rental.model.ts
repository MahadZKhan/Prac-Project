import { Booking } from '../../booking/shared/booking.model'; 

export class Rental {

	 _id : string;
	title : string;
	city : string;
	street : string;
	category : string;
	image : string;
	description : string;
	createdAt : string;
	bedrooms : number;
	dailyRate : number;
	shared : boolean;
	bookings: Booking[];

   
}

