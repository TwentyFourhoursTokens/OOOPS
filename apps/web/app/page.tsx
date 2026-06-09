import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/navigation/bottom-nav";

export default function HomePage() {
  const loggedIn = false;

  if (!loggedIn) {
    return (
      <main className="mx-auto flex min-h-[100dvh] w-full max-w-md flex-col justify-between px-4 py-6 md:justify-center">
        <Card className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold">Stay close to your people</h1>
            <p className="text-sm leading-6 text-zinc-300">
              See what friends create, discover new coins together, and never miss the moments shaping your community.
            </p>
          </div>

          <Button className="w-full">Join with Wallet</Button>
        </Card>

        <BottomNav />
      </main>
    );
  }

  return (
    <main className="mx-auto flex min-h-[100dvh] w-full max-w-md flex-col px-4 py-6">
      <h1 className="text-xl font-semibold">Home</h1>
    </main>
  );
}