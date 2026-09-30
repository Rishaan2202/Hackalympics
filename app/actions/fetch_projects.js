    'use server'

    import { getDatabase } from "@/lib/mongodb";

    export default async function fetchProjects() {
        const db = await getDatabase();
        const projects = await db.collection("userData").find({}, { projection: { "_id": 0, "event_details.projects": 1 } }).toArray();
        return projects;
    }
