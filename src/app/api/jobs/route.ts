import { NextResponse } from "next/server";

// Mock function to simulate fetching jobs from an external API
async function fetchJobsFromExternalAPI() {
  return [
    {
      title: "Graduate Engineer Trainee",
      company: "Lenovo",
      type: "Full-time",
      experience: "Freshers",
      location: "Bangalore",
      link: "https://lenovo.com/careers/graduate-engineer-trainee",
    },
    {
      title: "Test Engineer",
      company: "Ingersoll Rand",
      type: "Full-time",
      experience: "Freshers",
      location: "Bangalore",
      link: "https://ingersollrand.com/careers/test-engineer",
    },
    {
      title: "Core Staff Auditor",
      company: "EY",
      type: "Full-time",
      experience: "Freshers",
      location: "Kolkata",
      link: "https://ey.com/careers/core-staff-auditor",
    },
    {
      title: "Mechanical Engineer",
      company: "Adani Group",
      type: "Full-time",
      experience: "Freshers",
      location: "Ahmedabad",
      link: "https://adani.com/careers/mechanical-engineer",
    },
    {
      title: "Purchasing Associate",
      company: "Volvo India",
      type: "Full-time",
      experience: "Freshers",
      location: "Bangalore",
      link: "https://volvogroup.com/careers/purchasing-associate",
    },
    {
      title: "Customer Service Executive",
      company: "HCL Technologies",
      type: "Full-time",
      experience: "Freshers",
      location: "Noida",
      link: "https://hcltech.com/careers/customer-service-executive",
    },
    {
      title: "Voice Process Executive",
      company: "Cognizant",
      type: "Full-time",
      experience: "Freshers",
      location: "Hyderabad",
      link: "https://cognizant.com/careers/voice-process-executive",
    },
    {
      title: "Graduate Engineer Trainee",
      company: "Emerson",
      type: "Full-time",
      experience: "Freshers",
      location: "Pune",
      link: "https://emerson.com/careers/graduate-engineer-trainee",
    },
  ];
}

export async function GET() {
  try {
    const jobs = await fetchJobsFromExternalAPI();
    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}
