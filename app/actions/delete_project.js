import { getDatabase } from "@/lib/mongodb";

export async function deleteProject(projectId) {

    const db = await getDatabase();

    const result = await db.collection("userData").deleteOne(
        { "event_details.projects.id": projectId },
    );

    if (!result.acknowledged) {
        throw new Error("Failed to delete project");
    } else {
        console.log(`Project with ID ${projectId} deleted successfully.`);
    }

    return result;
}