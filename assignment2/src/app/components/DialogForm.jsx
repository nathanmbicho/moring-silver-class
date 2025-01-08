import PropTypes from 'prop-types';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const DialogForm = ({
    open,
    onClose,
    formData,
    onChange,
    onSubmit
}) => {
    if (!open) return null;
    return (
        <Dialog open={open} onClose={onClose} className="relative z-10">
          <DialogBackdrop
              transition
              className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"/>
          <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                      <DialogPanel
                          transition
                          className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                      >
                          <TransitionChild>
                              <div
                                  className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                                  <button
                                      type="button"
                                      onClick={() => setOpen(false)}
                                      className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                  >
                                      <span className="absolute -inset-2.5"/>
                                      <span className="sr-only">Close panel</span>
                                      <XMarkIcon aria-hidden="true" className="size-6"/>
                                  </button>
                              </div>
                          </TransitionChild>
                          <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                              <div className="px-4 sm:px-6">
                                  <DialogTitle className="text-base font-semibold text-gray-900">Add New Blog Post</DialogTitle>
                              </div>
                              <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                  <form autoComplete="off" onSubmit={onSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={onChange}
                                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Description
                                        </label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={onChange}
                                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
                                            rows="4"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Category
                                        </label>
                                        <input
                                            type="text"
                                            name="category"
                                            value={formData.category}
                                            onChange={onChange}
                                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Author Name
                                        </label>
                                        <input
                                            type="text"
                                            name="authorName"
                                            value={formData.authorName}
                                            onChange={onChange}
                                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Author Role
                                        </label>
                                        <input
                                            type="text"
                                            name="authorRole"
                                            value={formData.authorRole}
                                            onChange={onChange}
                                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
                                        />
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            type="button"
                                            onClick={onClose}
                                            className="mr-4 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="bg-emerald-500 text-white px-4 py-2 rounded-lg"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </div>
    </Dialog>
    );
}

DialogForm.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    formData: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        category: PropTypes.string,
        authorName: PropTypes.string,
        authorRole: PropTypes.string,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default DialogForm;
