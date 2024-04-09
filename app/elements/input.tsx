"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Element = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    console.log(data.success);
    if (data.success) {
      toast({
        description: "✅ Successfully subscribed!",
      });
      setEmail("");
    } else {
      toast({
        variant: "destructive",
        description: "❌ An error occurred. Please try again.",
      });
    }
  };

  return (
    <div className="flex items-center justify-center py-12 bg-white/5 text-center">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="text-2xl font-bold">
          Whitelist for early access.
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Input
              placeholder="jhondoe@gmail.com"
              name="email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-64"
              id="targetElement"
            />
            <Button
              className="bg-white active:scale-95 font-bold hover:scale-105 transition ease-in-out duration-300 font-[SFPro] text-lg shadow-md shadow-white/40"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Element;
