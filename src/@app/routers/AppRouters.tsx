import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppElement from "./AppElement";
import AppRoute from "./AppElement";
import routes from "./routes";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {routes.map((r) => (
          <Route
            key={r.path}
            path={r.path}
            element={
              <AppElement
                component={r.component}
                isLayout={r.isLayout}
                layout={r.layout}
              />
            }
          />
        ))}
      </Routes>
    </Router>
  );
};
export default AppRouter;
