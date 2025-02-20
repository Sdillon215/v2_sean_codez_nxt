export default function EducationSection() {
    return (
        <div className="grid grid-cols-4 gap-4 max-w-screen-md justify-items-start px-4">
            <div className="col-span-1">
                <p className="text-2xl font-bold">2021</p>
            </div>
            <div className="col-span-3">
                <p className="text-xl font-bold">Full Stack Web Dev Certification</p>
                <p className="text-md">University of Utah</p>
            </div>
            <div className="col-span-1">
                <p className="text-2xl font-bold">2020</p>
            </div>
            <div className="col-span-3">
                <p className="text-xl font-bold">Single Pitch Climbing Instructor Certification</p>
                <p className="text-md">American Mountain Guide Association</p>
            </div>
        </div>
    );
};