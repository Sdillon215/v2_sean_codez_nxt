export default function ExperienceSection() {
    return (
        <div className="grid grid-cols-4 gap-4 max-w-screen-md justify-items-start px-4 pb-16">
            <div className="col-span-1">
                <p className="text-2xl font-bold">2021 - current</p>
            </div>
            <div className="col-span-3">
                <p className="text-xl font-bold">Freelance Web Development</p>
                <p className="text-md">- Developed and maintained websites and web applications for various clients, ensuring high performance and usability.</p>
                <p className="text-md">- Provided technical consulting and problem-solving support, helping businesses improve their digital presence and efficiency.</p>
                <p className="text-md">- Integrated third-party services and APIs to streamline business operations and automate workflows.</p>
                <p className="text-md">- Optimized website functionality, accessibility, and responsiveness for better user engagement.</p>
            </div>
            <div className="col-span-1">
                <p className="text-2xl font-bold">2022 - 2023</p>
            </div>
            <div className="col-span-3">
                <p className="text-xl font-bold">DMVans formerly Dave & Matts Vans</p>
                <p className="text-md">- Developed customer-facing and admin applications using Flutter & Dart, ensuring a seamless cross-platform experience.</p>
                <p className="text-md">- Built and enhanced the Van Builder feature, allowing users to customize vehicles, save configurations, and submit deposits.</p>
                <p className="text-md">- Integrated Google Cloud Platform for secure and scalable backend execution, improving performance and reliability.</p>
                <p className="text-md">- Implemented Kustomer CRM integration, streamlining sales and customer management workflows.</p>
                <p className="text-md">- Developed an Asana API integration to automatically generate production task lists based on van configuration specs.</p>
                <p className="text-md">- Utilized GA4 & Google Analytics to track user interactions and optimize platform performance.</p>
            </div>
        </div>
    );
};