import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const NavSkeleton = () => {
	return (
        <SkeletonTheme baseColor="#f1f1f3" highlightColor="#c6c6cd">
            <div >
            <Skeleton style={{
                width:600,
                display: 'flex',
                lineHeight: 2,
                margin:'2rem',
                padding: '1rem 4rem',
                borderRadius:'5px',
            }} count={1} duration={2.5} />
            </div> 
        </SkeletonTheme>
	);
};

export default NavSkeleton;
