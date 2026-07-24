import useProfile from "../features/profile/hooks/useProfile";
import { Button } from "../components/common";
import useUpdateProfile from "../features/profile/hooks/useUpdateProfile";
import { toast } from "sonner";
import env from "../config/env";

function HomePage() {
  const { data: profile, isLoading, error } = useProfile();

  const updateProfile = useUpdateProfile();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong.</p>;
  }

  return (
    <main className="container">
      <h1>{profile.name}</h1>
      <Button
        onClick={() =>
          updateProfile.mutate(
            {
              name: "profile",
            },
            {
              onError(error) {
                console.log(error);
              },
            },
          )
        }
      >
        Test Update
      </Button>

      <Button onClick={() => toast.success("Upload complete")}>
        Toast Test
      </Button>
    </main>
  );
}

export default HomePage;
