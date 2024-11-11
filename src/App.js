import './App.css';
import HomePage from './pages/Home';

import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' >
    <Route index element={<HomePage />} />
    {/* <Route path=":type/:id" element={<BusinessDetailsPage />} /> */}
    {/* <Route path="search" element={<SearchPage/>}/> */}


  </Route>
))


function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
