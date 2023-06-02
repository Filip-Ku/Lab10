import React, {useState} from "react";

const AddPost = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [text, setText] = useState("");

        const handleSubmit = () => {
            const postObject = {
                title: title,
                text: text,
                image: image
            };
            sendDataToServer(postObject);
        };

   const sendDataToServer = async (postData) => {
     try {
         fetch("http://localhost:3001/api/posts", {
         method: "POST",
         headers: {
           "Content-Type": "application/json"
         },
         body: JSON.stringify(postData)
         });
            alert("Udało się wstawić nowego posta!")
        } catch (error) {
             alert("Coś poszło nie tak jak powinno :C");
       }

  }


    return (
        <div className="container">
            <div className="alert alert-dark" role="alert">
                <h4 className="alert-heading">Dodaj nowy post:</h4>
                <div id="title">
                    <input type="text" maxLength="25" placeholder="Wprowadz tytul" value={title} onChange={event => setTitle(event.target.value)}/>
                </div>
                <br/>
                <div id="image">
                    <input type="text" placeholder="Link obrazka" value={image} onChange={event => setImage(event.target.value)}/>
                </div>
                <br/>
                <div id="text">
                    <textarea cols="50" rows="7" placeholder="Opis postu" value={text} onChange={(event) => setText(event.target.value)}/>
                </div>
                <br/>
                <button className="btn btn-danger" onClick={handleSubmit}> Wyślij </button>
            </div>
        </div>
    );
};

export default AddPost;