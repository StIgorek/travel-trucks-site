import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./header/Header.jsx";
import NotFound from "../pages/notFound/NotFound.jsx";
//import css from "../components/App.module.css";

const Home = lazy(() => import("../pages/home/Home.jsx"));
const Catalog = lazy(() => import("../pages/catalog/Catalog.jsx"));
const TruckDetails = lazy(() =>
  import("../pages/truckDetails/TruckDetails.jsx")
);
const Features = lazy(() => import("./features/Features.jsx"));
const Reviews = lazy(() => import("./reviews/Reviews.jsx"));

function App() {
  return (
    <div>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<TruckDetails />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
