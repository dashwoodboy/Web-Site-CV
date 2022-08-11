export const subjectName = 'David Lourenço'

export class Hobby {
    hobbyName: string
    hobbyDetails: string

    constructor(hobbyName: string, hobbyDetails: string) {
        this.hobbyName = hobbyName
        this.hobbyDetails = hobbyDetails
    }
}


export const hobbies = [
    new Hobby('Read', 'I love read books about science.'), 
    new Hobby('Search new technologies', 'Need to be constantly searching for new technologies and learning more'), 
    new Hobby('Mechanic', 'I love car engines, repairing and understanding how everything works'), 
    new Hobby('Scouts', 'Member os SCOUTS movement since 2015')
]