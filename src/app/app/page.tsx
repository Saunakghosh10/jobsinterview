import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, BriefcaseIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

const jobs = [
  {
    title: "Software Engineer",
    company: "Tech Co",
    date: "2023-04-01",
    link: "https://example.com/job1"
  },
  // Add more job listings here
]

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Daily Career Hub</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BriefcaseIcon className="w-5 h-5 mr-2" />
                {job.title}
              </CardTitle>
              <CardDescription className="flex items-center">
                <BuildingOfficeIcon className="w-4 h-4 mr-1" />
                {job.company}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="flex items-center text-sm text-gray-500">
                <CalendarIcon className="w-4 h-4 mr-1" />
                Posted on {job.date}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href={job.link} target="_blank" rel="noopener noreferrer">Apply Now</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}