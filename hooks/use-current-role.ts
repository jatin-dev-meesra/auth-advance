// used in client component
import { getSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

// This hook doesn't rely on the session provider
export const useCurrentRole = () => {
  const [role, setRole] = useState("USER");
  const pathName = usePathname();

  const retrieveSession = useCallback(async () => {
    try {
      const sessionData = await getSession();

      if (sessionData) {
        const session = sessionData;
        setRole(session?.user?.role);
        return;
      }
    } catch (error) {
      setRole("USER");
    }
  }, []);

  useEffect(() => {
    retrieveSession();

    // use the pathname to force a re-render when the user navigates to a new page
  }, [retrieveSession, pathName]);

  return role;
};
