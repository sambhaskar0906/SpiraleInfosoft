import React, { Suspense, lazy } from 'react';
import Loader from '../Component/Public/Loader'; // Import the Loader component

// Lazy load the PublicRoutes component
const PublicRoutes = lazy(() => import('./Routes/PublicRoutes'));

const MainRouter = () => {
    return (
        <div>
            <Suspense fallback={<Loader />}>
                <PublicRoutes />
            </Suspense>
        </div>
    );
}

export default MainRouter;
