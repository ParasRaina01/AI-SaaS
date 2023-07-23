import { Button } from "@/components/ui/button";
import Link from "next/link";
const landingPage = () => {
  return (
    <div>
      Landing Page (unprotected)
      <Link href="/sign-in">
        <div>
          <Button>LogIn</Button>
        </div>
      </Link>
      <Link href="/sign-up">
        <div>
          <Button>Sign Up</Button>
        </div>
      </Link>
    </div>
  );
};
export default landingPage;
