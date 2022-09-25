export const subjectName = 'David Lourenço'

export class Contact {
    type: string
    contact: string

    constructor(type: string, contact: string) {
        this.type = type
        this.contact = contact
    }
}

export const contacts = [
    new Contact("Phone", "(+351) 915 765 997"),
    new Contact("Email", "davidperlourenco@gmail.com"),
]

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
    new Hobby('Reading', 'I love read books about science.', 'https://crossworkingbucket.s3.eu-west-2.amazonaws.com/reading.jpeg'), 
    new Hobby('Searching new technologies', 'Need to be constantly searching for new technologies and learning more', 'https://crossworkingbucket.s3.eu-west-2.amazonaws.com/technology.jpeg'), 
    new Hobby('Mechanic', 'I love car engines, repairing and understanding how everything works', 'https://crossworkingbucket.s3.eu-west-2.amazonaws.com/engine.jpeg'), 
    new Hobby('Scouts', 'Member of SCOUTS movement since 2015', 'https://crossworkingbucket.s3.eu-west-2.amazonaws.com/scouts.jpeg')
]

export class Qualification {

    title: string
    place: string
    description: string
    startDate: string
    endDate: string
    grade?: string

    constructor(title: string, place: string, description: string, startDate: string, endDate: string, grade?: string) {
        this.title = title
        this.place = place
        this.description = description
        this.startDate = startDate
        this.endDate = endDate
        this.grade = grade
    }
}

export const qualifications = [
    new Qualification(
        'High School', 
        'Escola Secundária José Loureiro Botas',
        'Science and technology',
        'Sept 2016',
        'Jun 2019',
    ),
    new Qualification(
        'Graduation',
        'Instituto Superior de Engenharia de Lisboa',
        'Computer Science and Computer Engineering',
        'Oct 2019',
        'Jul 2022',
        'Final - 16 | Final Project - 18'
    )
]

export const volunteering = [
    new Qualification(
        'ISEL Ambassador', 
        'Futuralia',
        'Represent the institute and the Computer Science and Engineering BsC at Futuralia.',
        'Mar 2022',
        'Apr 2022',
    ),
    new Qualification(
        'Stage Support',
        'DroidCon Lisbon',
        'Stage support during the second edition of DroidCon Lisbon.',
        'Apr 2022',
        'Apr 2022'
    )
]

export const aboutMe = 'My name is David Lourenço and I\'m 21 years old. I love searching for new technologies and new ways to improve my work. I always need to know how things work, so as a child I disassemble all the electronics we have in our house. My father is a mechanic and that made me want to develop an interest about mechanic too, especially engines, how they work and  how to fix them. In 2015 I joined the SCOUTS movement and my journey as a scout started, learning how to grow as a better Human. Recently I have discovered how much I like reading astronomy books as well as scientific essays. I\'m very friendly, dynamic and a team player.'