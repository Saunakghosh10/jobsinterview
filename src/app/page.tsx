'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BriefcaseIcon, BuildingOfficeIcon, ClockIcon, AcademicCapIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

interface Job {
  title: string;
  company: string;
  type: string;
  experience: string;
  location: string;
  link: string;
}

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch('/api/jobs');
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    }

    fetchJobs();
    const interval = setInterval(fetchJobs, 86400000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Empower Your Career</h1>
      <p className="text-center mb-12 text-muted-foreground">Discover exciting job opportunities tailored for you</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <BriefcaseIcon className="w-6 h-6 mr-2 text-primary" />
                {job.title}
              </CardTitle>
              <CardDescription className="flex items-center text-lg">
                <BuildingOfficeIcon className="w-5 h-5 mr-1 text-muted-foreground" />
                {job.company}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="flex items-center text-sm mb-2">
                <ClockIcon className="w-4 h-4 mr-2 text-muted-foreground" />
                {job.type}
              </p>
              <p className="flex items-center text-sm mb-2">
                <AcademicCapIcon className="w-4 h-4 mr-2 text-muted-foreground" />
                {job.experience}
              </p>
              <p className="flex items-center text-sm">
                <MapPinIcon className="w-4 h-4 mr-2 text-muted-foreground" />
                {job.location}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href={job.link} target="_blank" rel="noopener noreferrer">Apply Now</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}