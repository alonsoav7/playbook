const issue = {
    tittle:"Resolviendo Ejercicios de la semana 2",
    repositoryNameAssociated: "Mission Node JS",
    status: "Open",
    numberOfComments: "34",
    labels: "Finalizado",
    author: "Alonso Aguilar",
    dateCreated: new Date(),
    lastUpdated: new Date(),

    getTitleAndAuthor: function() {
        return `Título del Issue: ${this.tittle} Author: ${this.author}` 
    },

    getGeneralInfo: function() {
        return `General Information \nTitle: ${this.tittle} \nAuthor: ${this.author} \nDate Created: ${this.dateCreated}  \nStatus: ${this.status} \nLabels: ${this.labels}`
    },

}

console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())
   