import { Routes } from "@/routes/appRoutes";
import { routesGenerator } from "@/routes/routesUtil";

const GeneratedRoutes = routesGenerator(Routes);

function App() {
  return (
    <div>
      {GeneratedRoutes}
    </div>
  );
}

export default App;
