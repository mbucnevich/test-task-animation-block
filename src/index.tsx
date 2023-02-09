import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';


const App = lazy(() => import('./App'));

ReactDOM.render(
        <Suspense fallback={null}>
            <App />
        </Suspense>
    ,
    document.getElementById('root')
);
