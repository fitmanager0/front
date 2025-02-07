import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import User from "./User";
import IsAdmin from "@/components/IsAdmin/IsAdmin";

export default async function UserPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  return (
    <IsAdmin>
      <ProtectedRoute>
        <User params={resolvedParams} />
      </ProtectedRoute>
    </IsAdmin>
  );
}
