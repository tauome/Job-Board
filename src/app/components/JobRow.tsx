import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function JobRow(){
    return (
        <>
        <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4 relative">
            <div className="absolute cursor-pointer top-4 right-4">
            <FontAwesomeIcon className="size-4 text-gray-400" icon={faHeart} />
            </div>
            <div className="content-center">
                <img 
                className="size-12"
                src='data:image/png;base64,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'></img>
            </div>
            <div className="grow">
                <div className="text-gray-500 text-sm">Spotify</div>
                <div className="font-bold mb-1">Product Designer</div>
                <div className="text-gray-600 text-xs">Remote &middot; New York, NY &middot; Full-time</div>
            </div>
            <div className="content-end text-gray-600 text-xs">2 weeks ago</div>
        </div>
        </>
    )
}