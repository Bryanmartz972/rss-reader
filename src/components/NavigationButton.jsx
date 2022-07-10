import { NavLink } from 'react-router-dom'

const NavigationButton = ({ linkTo, icon, altText }) => {
	return (
		<NavLink
			to={linkTo}
			className={({ isActive }) =>
				(isActive ? 'group' : '') +
				' flex w-full items-center h-full justify-center sm:p-2'
			}>
			<div className='p-2 rounded-3xl bg-primary group-hover:bg-secondary group-visited:bg-secondary'>
				<img src={icon} alt={altText} />
			</div>
		</NavLink>
	)
}

export default NavigationButton
