import NavigationButton from './NavigationButton'
import RssIcon from '../assets/icons/rss.svg'
import BookmarksIcon from '../assets/icons/bookmark.svg'
import SettingsIcon from '../assets/icons/settings.svg'

const Navigation = () => {
	return (
		<div className='flex bg-primary z-10 fixed bottom-0 left-0 bg-tertiary w-full h-[52px] justify-around sm:top-0 sm:flex-col sm:w-fit sm:h-full'>
			<NavigationButton
				linkTo={'/'}
				icon={RssIcon}
				altText={'Navigate to the News Page'}
			/>
			<NavigationButton
				linkTo={'/settings'}
				icon={SettingsIcon}
				altText={'Navigate to the Settings Page'}
			/>
			<NavigationButton
				linkTo={'/bookmarks'}
				icon={BookmarksIcon}
				altText={'Navigate to the Bookmarks Page'}
			/>
			<NavigationButton
				linkTo={'/bookmarks'}
				icon={BookmarksIcon}
				altText={'Navigate to the Bookmarks Page'}
			/>
		</div>
	)
}

export default Navigation
