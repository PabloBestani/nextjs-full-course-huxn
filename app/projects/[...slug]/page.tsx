import React from 'react'

export default function Project({ params }: {
    params: {
        slug: string[];
    }
}) {
    const { slug } = params;
    const [category, projectName, projectId, action, id] = slug;

    return (
      <div>
        <ul>
            <li>Category: {category || 'No category'}</li>
            <li>Project name: {projectName || 'No projectName'}</li>
            <li>Project id: {projectId || 'No projectId'}</li>
            <li>Action: {action || 'No action'}</li>
            <li>Id: {id || 'No id'}</li>
        </ul>
      </div>
    )
}
