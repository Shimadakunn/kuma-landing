"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Linkedin, Twitter, TreePalm } from "lucide-react";

const Element = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getLoader() {
      const { bouncy } = await import("ldrs");
      bouncy.register();
    }
    getLoader();
  }, []);
  const handleSubmit = async (event: any) => {
    setLoading(true);
    event.preventDefault();
    const formData = {
      name,
      email,
    };

    try {
      const response = await fetch("https://getlaunchlist.com/s/oNh0Fh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          description: "✅ Successfully registered!",
        });
        setEmail("");
      } else {
        toast({
          variant: "destructive",
          description: "❌ An error occurred. Please try again.",
        });
      }
      setLoading(false);
    } catch (error) {
      toast({
        variant: "destructive",
        description: "❌ An error occurred. Please try again.",
      });
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center py-12 bg-accent mt-8 md:rounded-xl md:mx-36 text-center">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="text-2xl font-bold">Whitelist for early access.</div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Input
              placeholder="johndoe@gmail.com"
              name="email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-64 border-white"
              id="targetElement"
            />
            <Button
              className="bg-white active:scale-95 font-bold hover:scale-105 transition ease-in-out duration-300 font-[SFPro] text-lg shadow-md shadow-white/40"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <div className="px-2">
                  <l-bouncy size="30" speed="1.75" color="black"></l-bouncy>
                </div>
              ) : (
                <>Submit</>
              )}
            </Button>
          </div>
        </form>
        <div>And follow us on socials</div>
        <div className="flex flex-row items-center justify-center space-x-8">
          <TreePalm
            className="cursor-pointer"
            onClick={() => {
              window.open("https://linktr.ee/kuma_paw", "_blank");
            }}
          />
          <Twitter
            className="cursor-pointer"
            onClick={() => {
              window.open("https://twitter.com/Kuma_protocol", "_blank");
            }}
          />
          <Linkedin
            className="cursor-pointer"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/company/kuma-protocol/",
                "_blank"
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Element;
