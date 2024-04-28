"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "@/trpc/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Bell } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const getRandomDelay = () => -(Math.random() * 0.7 + 0.05);

const randomDuration = () => Math.random() * 0.07 + 1.23;

export function BeNotified() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [open, setOpen] = useState(false);
  const beNotified = api.beNotified.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setEmail("");
      setReason("");
      setOpen(false);
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        <Button type="reset">
          <AnimatePresence>
            <motion.div
              key={"expanded"}
              animate="animate"
              exit="reset"
              initial="reset"
              variants={{
                animate: {
                  radius: 2,
                  rotate: [-3, 4, 5, -3],
                  transition: {
                    delay: getRandomDelay(),
                    repeat: Infinity,
                    duration: randomDuration(),
                  },
                },
                reset: {
                  rotate: 0,
                },
              }}
            >
              <Bell className=" mr-2 h-4 w-4" />
            </motion.div>
          </AnimatePresence>{" "}
          I want to be notified
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tell us about your use case</DialogTitle>
          <DialogDescription>
            Help us build a tool tailored for your usecase
          </DialogDescription>
        </DialogHeader>
        <form
          id="notified-form"
          onSubmit={(e) => {
            e.preventDefault();
            beNotified.mutate({ email, reason });
          }}
          // className="mt-4 flex w-full items-center justify-center space-x-8"
        >
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            required
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="mb-8 mt-4 h-full">
            <Textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              id="reason"
              name="reason"
              className="col-span-3"
              placeholder="I want to use everydaydb because ..."
            />
          </div>
        </form>

        <DialogFooter>
          <Button
            disabled={beNotified.isPending}
            variant={"default"}
            type="submit"
            form="notified-form"
          >
            {beNotified.isPending ? "Submitting..." : "Be notified"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
