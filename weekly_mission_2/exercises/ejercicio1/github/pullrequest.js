const PullRequest= {
    title: "Añadiendo ejercicios de la semana 2",
    branchName: "Master",
    dateCreated: new Date(),
    status: "Closed",
    repositoryNameAssosiated: "visualpartnership",
    author: "Alonso Aguilar",

    getAuthor: function(){
        return `PR Status: ${this.status}`
    },

    getTitleAndAuthor(){
        return `This PR ${this.title} was created by ${this.author}`
    }

}