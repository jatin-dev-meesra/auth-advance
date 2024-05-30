"use client";
import { Button } from "@/components/ui/button";
import { logout } from "@/actions/logout";
import { useCurrentSession } from "@/hooks/use-current-user";
const SettingsPage = () => {
  const { session, status } = useCurrentSession();
  const onclick = () => {
    logout();
  };

  return (
    <div>
      <h1>Settings Page</h1>
      {JSON.stringify(session?.user)}
      {JSON.stringify(status)}

      <Button variant="outline" type="button" onClick={onclick}>
        Logout
      </Button>
    </div>
  );
};

export default SettingsPage;
