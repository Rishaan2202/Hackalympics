'use server';

import { getDatabase } from "@/lib/mongodb";
import { cookies } from "next/headers";

export async function Identify(projectId) {

  const cookieStore = cookies();
  const userId = cookieStore.get("user_id")?.value;

  if (!userId) {
    throw new Error("User not found while identifying project ownership");
  }

  const db = await getDatabase();
  const project = await db.collection("userData").findOne({ 'event_details.projects.id': projectId });

  if (!project) {
    throw new Error("Project not found while identifying it's ownership");
  }

  if (project.user !== userId) {
    return false; // The user does not own the project
  } else {
    return true; // The user owns the project
  }

}