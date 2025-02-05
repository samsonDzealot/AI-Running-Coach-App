import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock, Route } from "lucide-react";

interface WorkoutCardProps {
  title: string;
  duration: string;
  distance: string;
  imageUrl: string;
  onStart?: () => void;
}

export default function WorkoutCard({
  title,
  duration,
  distance,
  imageUrl,
  onStart,
}: WorkoutCardProps) {
  return (
    <Card className="overflow-hidden">
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Route className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">{distance}</span>
          </div>
        </div>
        <Button className="w-full" onClick={onStart}>
          <Play className="h-4 w-4 mr-2" />
          Start Workout
        </Button>
      </CardContent>
    </Card>
  );
}
