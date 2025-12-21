interface PaginationProps {
    page: number;
    maxPage: number;
    onPrev?: () => void;
    onNext?: () => void;
}

export default function Pagination({ page, maxPage, onPrev, onNext }: PaginationProps) {
    return (
        <div className="flex flex-col items-center gap-2 mt-4">
            <span className="text-lg font-semibold">
                Page {page} of {maxPage}
            </span>

            <div className="flex gap-2">
                <button
                    onClick={onPrev}
                    disabled={page === 1}
                    className="px-4 py-2 bg-(--bg-primary) rounded-md shadow hover:bg-(--bg-primary)/80 disabled:opacity-50 transition"
                >
                    Prev
                </button>

                <button
                    onClick={onNext}
                    disabled={page >= maxPage}
                    className="px-4 py-2 bg-(--bg-primary) rounded-md shadow hover:bg-(--bg-primary)/80 disabled:opacity-50 transition"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
