import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const HeaderSkeleton = () => {
	return (
        <SkeletonTheme baseColor="#f1f1f3" highlightColor="#c6c6cd">
            <div >
            <Skeleton style={{
                width:300,
                display: 'flex',
                lineHeight: 2,
                padding: '1rem',
                borderRadius:'5px'
            }} count={3} duration={2.5} />
            </div> 
        </SkeletonTheme>
	);
};

export default HeaderSkeleton;
