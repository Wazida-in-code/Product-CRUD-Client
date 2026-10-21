import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
export default function Home() {
  return (
    <HoverCard>
      <HoverCardTrigger delay={10} closeDelay={100} render={<Button variant="link">Welcome Here</Button>} />
      <HoverCardContent className="flex w-64 flex-col gap-0.5">
        <div className="font-semibold">Welcome...</div>
        <div>To the Product-Client-CRUD</div>
        <div className="mt-1 text-xs text-muted-foreground">
          By Wazida!
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
