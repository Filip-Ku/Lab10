import React from "react";

const AddPost = () => {
    return <div className="container">
        <div className="alert alert-dark" role="alert">
            <h4 className="alert-heading">Dodaj nowy post:</h4>
            <input type="text" maxLength="25" placeholder="Wprowadz tytul"></input>
            <input type="text" maxLength="25" placeholder="Link obrazka"></input>

        </div>
    </div>;
};

export default AddPost;