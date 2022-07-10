import Navigation from '../components/Navigation'

const NewsPage = () => {
	return (
		<div className='flex flex-row h-[100vh] w-full'>
			<Navigation />
			<div className='h-[100vh] w-full bg-white text-black px-8 py-4 sm:px-20 lg:px-20'>
				<h1>News Page</h1>
			</div>
		</div>
	)
}

export default NewsPage
