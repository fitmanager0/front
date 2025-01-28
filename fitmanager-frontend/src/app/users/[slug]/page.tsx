import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import User from "./User";

export default async function UserPage({
  params,
}: {
  params: { slug: string }; 
}) {
  const resolvedParams = params; 
  return (
    <ProtectedRoute>
      <User params={resolvedParams} />
    </ProtectedRoute>
  );
}
