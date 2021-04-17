import React from 'react';

const ProjectDetail = ({project}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'200px'}} src={project.img} alt=""/>
            <h5 className="mt-3 mb-3">{project.name}</h5>
            <p className="text-secondary">Bogura, Bangladesh</p>
        </div>
    );
};

export default ProjectDetail;