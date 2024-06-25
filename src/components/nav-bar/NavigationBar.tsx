import { HamburgMenu } from "./HamburgMenu";


export function NavigationBar() {

    return (

        <nav className='flex justify-between items-center px-4 text-white float-right'>
            <HamburgMenu />
        </nav>

    )

}