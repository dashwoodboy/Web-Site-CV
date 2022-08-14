export const subjectName = 'David Lourenço'

export class Hobby {
    hobbyName: string
    hobbyDetails: string
    imageLocation: string

    constructor(hobbyName: string, hobbyDetails: string, imageLocation: string) {
        this.hobbyName = hobbyName
        this.hobbyDetails = hobbyDetails
        this.imageLocation = imageLocation
    }
}


export const hobbies = [
    new Hobby('Read', 'I love read books about science.', '/images/reading.jpeg'), 
    new Hobby('Search new technologies', 'Need to be constantly searching for new technologies and learning more', '/images/reading.jpeg'), 
    new Hobby('Mechanic', 'I love car engines, repairing and understanding how everything works', '/images/reading.jpeg'), 
    new Hobby('Scouts', 'Member os SCOUTS movement since 2015', '/images/reading.jpeg')
]