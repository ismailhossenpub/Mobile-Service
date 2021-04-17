import React from 'react';
import symphony from '../../../images/project1.jpg';
import samsung from '../../../images/project2.jpg';
import vivo from '../../../images/project3.jpg';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

const Project = () => {
    const ProjectData =[
        {
            name:'Symphony Mobile project',
            img:symphony
        },
        {
            name:'Samsung Mobile project',
            img:samsung
        },
        {
            name:'Vivo Mobile project',
            img:vivo
        },
    ]
    return (
        <section className="Project-container mt-5">
            <div className="text-center">
                <h5 style={{color:'#1CC7C1'}}>Our Project</h5>
                <h2>Project We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-3 pt-5">
            {
                ProjectData.map(project => <ProjectDetail project={project}></ProjectDetail>)
            }
            </div>
        </div>
        </section>
    );
};

export default Project;