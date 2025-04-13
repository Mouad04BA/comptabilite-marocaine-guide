
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CountdownTimerProps {
  targetDate: Date;
  title: string;
}

export function CountdownTimer({ targetDate, title }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Card className="bg-primary/5 border-primary/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-center text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 text-center gap-1">
          <div className="flex flex-col">
            <span className="text-2xl font-bold">{timeLeft.days}</span>
            <span className="text-xs text-muted-foreground">Jours</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">{timeLeft.hours}</span>
            <span className="text-xs text-muted-foreground">Heures</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">{timeLeft.minutes}</span>
            <span className="text-xs text-muted-foreground">Minutes</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">{timeLeft.seconds}</span>
            <span className="text-xs text-muted-foreground">Secondes</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
