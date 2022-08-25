export class NavOption {
    name: string
    route: string
    inside: boolean

    constructor(name: string, route: string, inside: boolean) {
        this.name = name
        this.route = route
        this.inside = inside
    }
}

export const navBarOptions = [ 
    new NavOption('Home', '/', true), 
    new NavOption('Hobbies', '/hobbies', true), 
    new NavOption('Projects', '', false), 
    new NavOption('Qualifications', '/qualifications', true)
]