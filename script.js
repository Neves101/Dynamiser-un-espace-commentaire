let monForm = document.querySelector("form"); 
let espaceCommentaire = document.querySelector("#newComment")
monForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    let prenom = document.querySelector("#first-name").value; 
    let nom = document.querySelector("#last-name").value; 
    let commentaire = document.querySelector("#message").value;

    if(prenom == "" || nom == "" || commentaire == ""){
        let messageError = document.querySelector("#error-message"); 
        messageError.style.display = "block"; 
    }else{
        let titreCommentaire = document.createElement("h3");
        let newContent = document.createTextNode(prenom + " " + nom);
        titreCommentaire.appendChild(newContent);
        espaceCommentaire.appendChild(titreCommentaire)
    

        let comment = document.createElement("p")
        let commentText = document.createTextNode(commentaire)
        comment.appendChild(commentText)
        espaceCommentaire.appendChild(comment)



    }



});