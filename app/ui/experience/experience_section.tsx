export default function ExperienceSection() {
    return (
        <div className="grid grid-cols-4 gap-4 max-w-screen-md justify-items-start px-4 pb-16">
            <div className="col-span-1">
                <p className="text-2xl font-bold">2022 - 2023</p>
            </div>
            <div className="col-span-3">
                <p className="text-xl font-bold">DMVans formerly Dave & Matts Vans</p>
                <p className="text-md">- Built and maintain website for the startup van manufacturer DMVans with complex features including a van builder enabling customers to customize their van configuration, save configurations to their account, and submit configurations with a deposit to the sales team</p>
                <p className="text-md">- Integrate website with analytics for event tracking and targeted advertisement</p>
                <p className="text-md">- Build and maintain a separate application for the sales team to adjust and confirm client build configurations</p>
                <p className="text-md">- Integrate both applications with a variety of other technologies such as Kustomer for customer service, Asana for build team task management based off of van configuration data, GA4 & Meta Business Suite for event tracking/targeted ads</p>
                <p className="text-md">- Adapt with the dynamic needs of a startup and efficiently find software solutions to serve the needs of all of the companies departments</p>
            </div>
            <div className="col-span-1">
                <p className="text-2xl font-bold">2022 - current</p>
            </div>
            <div className="col-span-3">
                <p className="text-xl font-bold">Freelance Web Development</p>
                <p className="text-md">- Effectively communicate with clients to understand their vision and business needs</p>
                <p className="text-md">- Develop and design applications to meet client needs</p>
                <p className="text-md">- Maintain and update applications as needed</p>
            </div>
        </div>
    );
};