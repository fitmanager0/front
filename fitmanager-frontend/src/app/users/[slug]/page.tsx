import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import User from "./User";

export default async function UserPage({
  params,
} : {
  params: Promise<{ slug: string }>;
}) {
    return (
        <ProtectedRoute>
            < User params={params} />
        </ProtectedRoute>
    );
  }