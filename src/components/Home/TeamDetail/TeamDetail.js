import React from 'react';

const TeamDetail = ({team}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'200px'}} src={team.img} alt=""/>
            <h5 className="mt-3 mb-3">{team.name}</h5>
        </div>
    );
};

export default TeamDetail;