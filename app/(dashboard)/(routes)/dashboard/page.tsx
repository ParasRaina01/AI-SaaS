//app/page.tsx
import { UserButton } from "@clerk/nextjs";

export default function dashboard() {
  return (
    <div>
      <p>Dashboard page (protected)</p>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}