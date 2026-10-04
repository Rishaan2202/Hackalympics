'use client'

import React from 'react'
import { deleteProject } from '@/app/actions/delete_project'

const handleDelete = async (projectId) => {
    try {
        await deleteProject(projectId);
    } catch (error) {
        console.error("Error deleting project:", error);
    }
}

const Delete = ({projectId}) => {
    return (
        <div>
            <button onClick={async () => {
                handleDelete(projectId);
            }}></button>
        </div>
    )
}

export default Delete
