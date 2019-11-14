import React, { useEffect, useState } from 'react';
import './Content.css';
import API from "../../clientRoutes/API";

const Content = ({ display, user }) => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        API.getCategoryData({ id: user, category: display })
            .then(response => { setContent(response.data); console.log(response.data) });
    }, [display, user]);

    return (
        <p>
            {display}
            {user}
        </p>
    )
}

export default Content;