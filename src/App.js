import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Router';

function App() {
  return (
    <div className="">
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
