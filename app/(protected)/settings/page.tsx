import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      <h1>Settings Page</h1>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button variant="outline" type="submit">
          Logout
        </Button>
      </form>
    </div>
  );
};

export default SettingsPage;
