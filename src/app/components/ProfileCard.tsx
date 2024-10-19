"use client"

import React, { useState } from 'react';
import Image from "next/image";
import '../styles/styles.css';

type ProfileCardProps = {
  name: string;
  pronouns: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ name, pronouns }) => {
    const [like, setLike] = useState<number>(0)

    const handleOnClick = () => {
        setLike(likeCount => likeCount + 1);
    };

  return (
    <div className="profile-card">
        <div className="flex-row">
            <Image
                src="/images/blueprint.png"
                alt="Blueprint Logo"
                width={60}
                height={60}
            />
            <div className="flex-column">
                <h2 className="profile-name">{name}</h2>
                <p className="profile-pronouns">{pronouns}</p>
            </div>
            <div className="flex-column">
                <p className="like-count">{like}</p>
                <button onClick={handleOnClick}>Like</button>
            </div>
      </div>
    </div>
  );
};

export default ProfileCard;
