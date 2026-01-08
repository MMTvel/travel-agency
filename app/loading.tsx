export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 px-4">
            <div className="text-center max-w-md w-full">
                <div className="mb-8">
                    <div className="inline-block">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                    </div>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">
                    Planning Your Journey
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                    Finding the best travel deals for you...
                </p>
            </div>
        </div>
    );
}
