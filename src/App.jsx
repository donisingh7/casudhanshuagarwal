import MainLayout from "./layouts/MainLayout.jsx";
import AppRouter from "./routes/AppRouter.jsx";

export default function App() {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}
