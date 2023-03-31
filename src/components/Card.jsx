import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faHeart, faPen } from '@fortawesome/free-solid-svg-icons'


export default function Card(props) {
    const { info: { img, likes, user, description } } = props;
    const [isLiked, setIsLiked] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [imgLikes, setImgLikes] = useState(likes);
    const [imgDescription, setImgDescription] = useState(description);
    
     const handleLike = () => {
        if (!isLiked) {
            setImgLikes(prev => prev+1)
        } else {
            setImgLikes(prev => prev-1)
        }
        setIsLiked(prev => !prev);
    }
    
    const handleEdit = () => {
        setIsEdit(prev => !prev);
    }
    
    const handleDescription = (e) => {
        setImgDescription(e.target.value);
    }

    return (
        <div className="w-80 mx-auto my-8 p-4 rounded-lg bg-red-50">
            <img src={img} alt="img" className="w-full h-60 object-cover rouded-lg" />
            <div className="flex flex-col py-4">
                <div className="flex justify-end pb-4">
                    {user === 'mrnlts' && <FontAwesomeIcon icon={faPen} className={"pr-2 " + (isEdit ? "text-red-500" : "")} onClick={handleEdit}/>}
                    <FontAwesomeIcon icon={faHeart} className={isLiked ? "text-red-500" : ""} onClick={handleLike} />
                    <p className="pl-2">{imgLikes}</p>
                </div>
                {!isEdit && <p className="text-justify leading-5"><span className="font-bold">{user} </span>{imgDescription}</p>}
                {isEdit && <p className="text-justify leading-5"><span className="font-bold">{user} </span><input type="text" value={imgDescription} onChange={ handleDescription } /></p>}
            </div>
        </div>
    )
}