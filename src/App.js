import AppRoutes from './Routes/AppRoutes';
import { AppContext } from './AppContext/AppContext';

function App() {
  const appInstallFolder = '/HW_FE_230411';
  return (
    <AppContext.Provider value={appInstallFolder}>
      <AppRoutes />
    </AppContext.Provider>
  );
}

export default App;