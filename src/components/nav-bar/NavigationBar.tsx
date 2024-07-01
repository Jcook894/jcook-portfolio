import { HamburgMenu } from "./HamburgMenu";


export function NavigationBar() {

    return (

        <div className='fox justify-end w-full pr-4 pt-2 h-12 text-white bg-transparent'>
            <div className="absolute top-2 right-6">
                <HamburgMenu />
            </div>
        </div>

    )

}