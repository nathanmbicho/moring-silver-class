import PropTypes from 'prop-types';
import Image from "next/image";

const getGeneratedImage = (authorName) => {
    return "https://ui-avatars.com/api/?name="+authorName+"&size=128&bold=true&background=random";
}

const PostCard = ({ post, onEdit }) => (
    <div className="bg-gray-50 drop-shadow rounded-lg p-4 flex flex-col justify-between h-full">
        <div>
            <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
            <div className="flex items-center mt-2">
                <div className="flex-shrink-0">
                    <Image className="bg-gray-300 rounded-full" width="40" height="40" alt={post.authorName+ ' avatar'} src={getGeneratedImage(post.authorName)} />
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700">{post.authorName}</p>
                    <p className="text-xs text-gray-500">{post.authorRole}</p>
                </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 py-2">{post.description}</p>
            <div className="mt-4">
                <span className="inline-block text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                    {post.category}
                </span>
            </div>
        </div>
        <div className="mt-auto pt-4">
            <p className="text-xs text-gray-500">
                <span className="text-gray-400">Posted At:-</span> {post.datetime}
            </p>
            <div className="flex justify-end space-x-4 mt-2 text-sm">
                <button
                    onClick={() => onEdit(post.id)}
                    className="text-indigo-600 rounded bg-indigo-100 hover:text-white hover:bg-indigo-500 px-4 py-1"
                >
                    Edit
                </button>
            </div>
        </div>
    </div>
);

PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        authorName: PropTypes.string.isRequired,
        authorRole: PropTypes.string.isRequired,
        datetime: PropTypes.string.isRequired,
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default PostCard;
