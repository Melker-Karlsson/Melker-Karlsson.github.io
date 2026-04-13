import '../css/Project.css'

export default function Project({projectName, description, link}: {projectName: string, description: string, link: string}){
    return(
        <a href={link} className='project'>
            <div>
                <h2 className='projectTitle'>{projectName}</h2>
                <p className='projectSummary'>{description}</p>
            </div>
        </a>
    )
}