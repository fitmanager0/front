import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import Administration from "./Administration";
import IsAdmin from "@/components/IsAdmin/IsAdmin";

export default function RenderAdministration() {
  return (
    <IsAdmin>
      <ProtectedRoute>
        <Administration />
      </ProtectedRoute>
    </IsAdmin>
  );
}
