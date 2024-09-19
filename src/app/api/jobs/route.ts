import { NextResponse } from 'next/server';

// Mock function to simulate fetching jobs from an external API
async function fetchJobsFromExternalAPI() {
  return [
    {
      title: "Senior Software Engineer",
      company: "TechCorp",
      type: "Full-time",
      experience: "5+ years",
      location: "San Francisco, CA",
      link: "https://techcorp.com/careers/senior-software-engineer"
    },
    {
      title: "Data Scientist",
      company: "AI Innovations",
      type: "Full-time",
      experience: "3-5 years",
      location: "New York, NY",
      link: "https://ai-innovations.com/careers/data-scientist"
    },
    {
      title: "UX/UI Designer",
      company: "DesignMasters",
      type: "Contract",
      experience: "2-4 years",
      location: "Remote",
      link: "https://designmasters.com/careers/ux-ui-designer"
    },
    {
      title: "DevOps Engineer",
      company: "CloudSolutions",
      type: "Full-time",
      experience: "4+ years",
      location: "Seattle, WA",
      link: "https://cloudsolutions.io/careers/devops-engineer"
    },
    {
      title: "Product Manager",
      company: "InnovateTech",
      type: "Full-time",
      experience: "3-6 years",
      location: "Austin, TX",
      link: "https://innovatetech.com/careers/product-manager"
    },
    {
      title: "Full Stack Developer",
      company: "WebWizards",
      type: "Part-time",
      experience: "2+ years",
      location: "Chicago, IL",
      link: "https://webwizards.dev/careers/full-stack-developer"
    },
    {
      title: "Marketing Specialist",
      company: "BrandBoost",
      type: "Full-time",
      experience: "1-3 years",
      location: "Los Angeles, CA",
      link: "https://brandboost.com/careers/marketing-specialist"
    },
    {
      title: "Cybersecurity Analyst",
      company: "SecureNet",
      type: "Full-time",
      experience: "3-5 years",
      location: "Washington, D.C.",
      link: "https://securenet.com/careers/cybersecurity-analyst"
    },
    {
      title: "Machine Learning Engineer",
      company: "AI Frontiers",
      type: "Full-time",
      experience: "4+ years",
      location: "Boston, MA",
      link: "https://ai-frontiers.com/careers/machine-learning-engineer"
    },

  ];
}

export async function GET() {
  try {
    const jobs = await fetchJobsFromExternalAPI();
    return NextResponse.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
  }
}