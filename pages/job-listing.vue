<template>
  <div class="bg-[#e4f7f9] min-h-screen">
    <div class="h-40 bg-teal-800 opacity-50">
      <img
        src="/job-listing/bg-header-desktop.svg"
        alt=""
        class="w-full h-full object-cover bg-center"
      />
    </div>
    <div class="max-w-7xl mx-auto min-h-screen">
      <div v-if="store.list.length > 0" class="-mt-16 p-6 min-h-[100px]">
        <SearchList />
      </div>
      <div class="p-6 w-full flex flex-col gap-12">
        <div v-for="(job, index) in filteredList" :key="index">
          <JobCard :job="job" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSearchListStore } from "../stores/searchList";

const store = useSearchListStore();
const jobs = ref([
  {
    id: 1,
    company: "Photosnap",
    logo: "/job-listing/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "/job-listing/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["JavaScript"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "/job-listing/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "/job-listing/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "/job-listing/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "/job-listing/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "/job-listing/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "/job-listing/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "/job-listing/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "/job-listing/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
]);

const filteredList = computed(() => {
  // If store.list is empty, return all jobs
  if (store.list.length === 0) {
    return jobs.value;
  }

  return jobs.value.filter((job) => {
    // Check if every value in store.list is present in at least one key of job object
    return store.list.every((value) =>
      ["role", "level", "languages", "tools"].some(
        (key) => job[key] && job[key].includes(value)
      )
    );
  });
});
</script>

<style scoped></style>
