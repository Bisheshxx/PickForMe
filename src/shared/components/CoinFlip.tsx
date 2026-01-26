"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Smile, Worm } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function CoinFlip() {
  const [flipping, setFlipping] = useState(false);
  const [result, setResult] = useState<"heads" | "tails">("heads");

  const flip = () => {
    if (flipping) return;
    const outcome = Math.random() < 0.5 ? "heads" : "tails";
    setResult(outcome);
    setFlipping(true);
    setTimeout(() => setFlipping(false), 1200);
  };

  return (
    <Card className="px-4 py-6">
      <CardHeader className="px-0">
        <CardTitle>Coin Toss</CardTitle>
        <CardDescription>Let RNJesus decide.</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div
          className="w-32 h-32 relative rounded-full shadow-xl"
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            rotateX: flipping ? 1200 : result === "heads" ? 0 : 180,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          onClick={flip}
        >
          <div className="absolute inset-0 rounded-full bg-amber-500 flex items-center justify-center text-2xl font-bold backface-hidden flex-col border-10 border-amber-300">
            <Smile size={50} />
            {/* <span className="text-sm">Heads</span> */}
          </div>

          <div className="absolute inset-0 rounded-full bg-amber-500 flex items-center justify-center text-2xl font-bold backface-hidden rotate-x-180 flex-col border-10 border-amber-300">
            <Worm size={50} />
            {/* <span className="text-sm">Tails</span> */}
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}
