import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import UserEditPanel from "./UserEditPanel";


export default async function EditUser({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params; 
  return (
    <ProtectedRoute>
      <UserEditPanel params={resolvedParams} />
    </ProtectedRoute>
  );
}
