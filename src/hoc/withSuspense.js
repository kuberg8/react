import React from 'react';


export const withSuspense = (Component) => {
	return (props) => (
		<React.Suspense fallback={<div className="Loading">Loading...</div>}>
			<Component {...props} />
		</React.Suspense>
	)
}