const IconResearch = ({ width = 24, height = 24, color = 'currentColor', className = '' }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={width}
		height={height}
		viewBox='0 0 24 24'
		fill='none'
		stroke={color}
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className={className}>
		<path d='M9 2H15L20 7V22H4V2H9Z' />
		<circle cx='11.5' cy='13.5' r='4' />
		<line x1='15.5' y1='17.5' x2='20' y2='22' />
	</svg>
);

export default IconResearch;
