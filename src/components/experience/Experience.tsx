
export function Experience() {

    return (

        <section id="experience" className="flex flex-col p-6 text-left bg-[#505a74] bg-opacity-90 rounded-lg p-4 mt-8">
            
            <p className="pb-10 font-bold text-xl"> Work Experience </p>

            <div className="mb-6">
                <h3 className="text-xl font-semibold underline">SMC Partners, LLC</h3>
                <p className="text-white">Position: Software Engineer</p>
                <p className="text-white">Duration: 08/01/2017 - 12/31/2020</p>
                <ul className="list-disc list-inside">
                    <li>Developed and maintained full stack applications using React, Node.js, and other technologies.</li>
                    <li>Worked on projects that improved patient care and streamlined healthcare operations.</li>
                    <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold underline">Hyphen</h3>
                <p className="text-white">Position: Senior Software Engineer</p>
                <p className="text-white">Duration: 12/31/2020 - Current </p>
                <ul className="list-disc list-inside">
                    <li>Designed and developed user-friendly front-end interfaces to ensure the best user experience.</li>
                    <li>Leveraged cloud services like AWS and Azure to build scalable applications.</li>
                    <li>Continuously sought out new challenges and learning opportunities to enhance skillset.</li>
                </ul>
            </div>
        
        </section>

    )

}