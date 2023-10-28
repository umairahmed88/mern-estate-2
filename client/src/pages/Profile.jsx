import { useSelector } from "react-redux";

export default function Profile() {
	const { currentUser } = useSelector((state) => state.user);
	return (
		<div className=' p-3 max-w-lg mx-auto'>
			<h1 className=' text-3xl font-semibold text-center my-7'>Profile</h1>
			<form className='flex flex-col gap-4'>
				<img
					src={currentUser.avatar}
					alt='profile'
					className=' self-center mt-2 rounded-full h-24 w-24 object-cover cursor-pointer'
				/>
				<input
					type='text'
					placeholder={currentUser.username}
					className=' border p-3 rounded-lg'
					id='username'
				/>
				<input
					type='email'
					placeholder={currentUser.email}
					className=' border p-3 rounded-lg'
					id='email'
				/>
				<input
					type='password'
					placeholder='password'
					className=' border p-3 rounded-lg'
					id='password'
				/>
				<button className=' bg-slate-700 text-white uppercase p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>
					Update
				</button>
			</form>
			<div className=' justify-between flex mt-5'>
				<span className=' text-red-700 cursor-pointer'>Delete Account</span>
				<span className=' text-red-700 cursor-pointer'>Sign Out</span>
			</div>
		</div>
	);
}
