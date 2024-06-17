import JobRow from "./JobRow";

export default function Jobs () {
    return (
        <div className="bg-gray-100 py-6 rounded-3xl">
            <div className="container">
                <h2 className="font-bold">Recent Jobs</h2>
                <div className="flex flex-col gap-4 mt-2">
                    <JobRow/>
                    <JobRow/>
                    <JobRow/>
                </div>     
            </div>
        </div>
    )
}