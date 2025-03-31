import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NotebookText } from "lucide-react";

type Props = {
  title: string;
  description: string;
};

export const UnitBanner = ({ title, description }: Props) => {
  return (
    <div className="bg-gray-900 p-6 shadow-lg rounded-lg mb-10 flex items-center justify-between">
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-lg text-gray-300">{description}</p>
      </div>
      <Link href="/lesson">
        <Button
          variant="hologram"
          size="lg"
          className="hidden xl:flex border-2 border-b-4 active:border-b-2"
        >
          <NotebookText className="mr-2" />
          Continue
        </Button>
      </Link>
    </div>
  );
};