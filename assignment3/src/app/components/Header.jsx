import PropTypes from 'prop-types';

const Header = ({ title, description, onAddNew }) => (
    <div className="flex justify-between items-baseline">
        <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {title}
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">{description}</p>
        </div>
        <div>
            <button
                className="bg-emerald-500 text-white px-5 py-2 font-semibold rounded"
                type="button"
                onClick={onAddNew}
            >
                + Add New Portfolio Blog
            </button>
        </div>
    </div>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onAddNew: PropTypes.func.isRequired,
};

export default Header;
