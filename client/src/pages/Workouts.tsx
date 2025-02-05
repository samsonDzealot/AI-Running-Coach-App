import WorkoutCard from "@/components/WorkoutCard";
import { useToast } from "@/hooks/use-toast";

const WORKOUTS = [
  {
    id: 1,
    title: "5K Training Run",
    duration: "30 mins",
    distance: "5 km",
    imageUrl: "https://source.unsplash.com/random/800x600/?running",
  },
  {
    id: 2,
    title: "Hill Sprints",
    duration: "20 mins",
    distance: "3 km",
    imageUrl: "https://source.unsplash.com/random/800x600/?sprint",
  },
  {
    id: 3,
    title: "Recovery Jog",
    duration: "45 mins",
    distance: "6 km",
    imageUrl: "https://source.unsplash.com/random/800x600/?jogging",
  },
  {
    id: 4,
    title: "Interval Training",
    duration: "40 mins",
    distance: "5 km",
    imageUrl: "https://source.unsplash.com/random/800x600/?fitness",
  },
];

export default function Workouts() {
  const { toast } = useToast();

  const handleStartWorkout = (id: number) => {
    toast({
      title: "Starting workout",
      description: "Preparing your training session...",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Workout Library</h1>
        <p className="text-gray-600">Choose your training for today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WORKOUTS.map((workout) => (
          <WorkoutCard
            key={workout.id}
            {...workout}
            onStart={() => handleStartWorkout(workout.id)}
          />
        ))}
      </div>
    </div>
  );
}
