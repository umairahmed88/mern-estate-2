import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function ListingItem({ listing }) {
	return (
		<div className='bg-white shadow-md hover:shadow-lg w-full sm:w-[330px] transition-shadow overflow-hidden rounded-lg'>
			<Link to={`/listing/${listing._id}`}>
				<img
					src={
						listing.imageUrls[0] ||
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOXq5XE5EBf_BZt9EdI5C2UwJA7GO0Qdzptw&usqp=CAU"
					}
					alt='listing cover'
					className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
				/>
				<div className='p-3 flex flex-col gap-2 w-full'>
					<p className='text-lg font-semibold text-slate-700 truncate'>
						{listing.name}
					</p>
					<div className='flex items-center gap-1'>
						<MdLocationOn className='h-4 w-4 text-green-700' />
						<p className='text-sm text-gray-600 truncate w-full'>
							{listing.address}
						</p>
					</div>
					<p className='text-sm text-gray-600 line-clamp-2'>
						{listing.description}
					</p>
					<p className='text-slate-500 mt-2 font-semibold flex items-center'>
						$
						{listing.offer
							? listing.discountPrice
								? listing.discountPrice.toLocaleString("en-US")
								: "0"
							: listing.regularPrice
							? listing.regularPrice.toLocaleString("en-US")
							: "0"}
						{listing.type === "rent" && " / month"}
					</p>
					<div className='text-slate-700 flex gap-4'>
						<div className='font-bold text-xs'>
							{listing.bedrooms > 1
								? `${listing.bedrooms} beds`
								: `${listing.bedrooms} bed`}
						</div>
						<div className='font-bold text-xs'>
							{listing.bathrooms > 1
								? `${listing.bathrooms} baths`
								: `${listing.bathrooms} bath`}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
