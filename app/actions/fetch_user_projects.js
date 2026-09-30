'use server'

import { getDatabase } from "@/lib/mongodb";

export async function fetchProjects(projectId) {
    const db = await getDatabase();
    const user = await db.collection("userData").findOne({ "event_details.projects.id": projectId }, { projection: { "_id": 0, "event_details.projects.$": 1 } });
    const project = user?.event_details?.projects?.[0] || null;
    return project;
}