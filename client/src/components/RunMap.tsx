import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function RunMap() {
  const [progress, setProgress] = useState(0);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    // Mock GPS updates
    const timer = setInterval(() => {
      setProgress((p) => Math.min(p + 1, 100));
      setDistance((d) => d + 10);
      setDuration((d) => d + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="p-4">
      <div className="aspect-video bg-gray-100 rounded-lg mb-4 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-semibold text-gray-500">Map View</span>
        </div>
      </div>
      <div className="space-y-4">
        <Progress value={progress} className="w-full" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Distance</p>
            <p className="text-lg font-semibold">{(distance / 1000).toFixed(2)} km</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Duration</p>
            <p className="text-lg font-semibold">
              {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
