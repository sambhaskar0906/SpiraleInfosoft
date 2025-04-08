import React, { Suspense, lazy } from 'react';

// Lazy load the PublicRoutes component
const PublicRoutes = lazy(() => import('./Routes/PublicRoutes'));

const MainRouter = () => {
    return (
        <div>
            <PublicRoutes />
        </div>
    );
}

export default MainRouter;
