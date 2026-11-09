"use server"

import { getDatabase } from "@/lib/mongodb";
import { cookies } from 'next/headers';

export async function FetchProjects() {

    const cookieStore = await cookies();
    const userId = cookieStore.get('userId')?.value;

    const db = await getDatabase();
    const projects = await db.collection("userData").findOne({ user: userId }, { projection: { "_id": 0, "hackatime_data.data.projects": 1 } });

    return projects;
}
