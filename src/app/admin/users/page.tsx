import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ManageUsers from "@/components/ManageUsers";

async function checkAuthorization() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value; // Get token from cookie

  if (!token) {
    return false;
  }

  try {
    const response = await fetch('http://localhost:8000/api/admin', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Referer': 'http://localhost:3000/login',
        Authorization: `Bearer ${token}`,
      },
    });

    return response.ok;
  } catch (error) {
    console.error('Error checking authorization:', error);
    return false;
  }
}

export default async function ManageBooksPages() {
  const isAuthorized = await checkAuthorization();

  if (!isAuthorized) {
    redirect('/unauthorized');
  }

  return <ManageUsers />;
}