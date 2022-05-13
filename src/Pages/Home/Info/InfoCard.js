import React from 'react';
const InfoCard = ({img, title, description, bgColor}) => {
    return (
        <div>
            <div class={`card lg:card-side shadow-xl p-5 text-white ${bgColor}`}>
                <figure><img src={img} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;