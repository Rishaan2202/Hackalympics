import ExplorePage from "./content";
import fetchProjects from '@/app/actions/fetch_projects';

export default async function Explore() {
  const projects = await fetchProjects();
  const projectsList = projects.flatMap(user => user.event_details?.projects || []);
  return <ExplorePage projects={projectsList} />
}