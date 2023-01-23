import { useEffect, useState } from "react";
import { PaginationProps } from "../interfaces";

export const usePagination = <T=any>(array: T[], limit: number) => {

    const [pagination, setPagination] = useState<PaginationProps>({} as PaginationProps);

    const [offset, setOffset] = useState(0);

    function nextPage () {

        const {currentPage, totalPages, nextPage} = pagination;

        if (currentPage === null) {

            return

        }

        if (currentPage >= totalPages) {

            return

        }

        setOffset( currentState => {

            return currentState + limit;

        });

        setPagination(currentState => (
            {
                ...currentState, 
                currentPage: Number(currentState.currentPage) + 1,
                previousPage: Number(currentState.previousPage) + 1,
                nextPage: Number(currentState.nextPage) + 1,
            }
        ));

    }

    function previousPage () {

        const {previousPage} = pagination

        if (previousPage === null) {

            return

        }

        if (previousPage <= 0) {

            return

        }

        setOffset( currentState => {

            return currentState - limit

        });

        setPagination(currentState => (
            {
                ...currentState, 
                currentPage: Number(currentState.currentPage) - 1,
                previousPage: Number(currentState.previousPage) - 1,
                nextPage: Number(currentState.nextPage) - 1,
            }
        ));

    }

    useEffect(() => {

        const newPagination = {

            totalItens: array.length,
            previousPage: null,
            currentPage: 1,
            nextPage: 2,
            totalPages: Math.ceil(array.length / limit)

        }

        setPagination(newPagination);
        setOffset(0);

    }, [array]);

    return {
        pagination,
        rangeOfProductsPerPage: array.slice(offset, limit + offset), 
        nextPage, 
        previousPage
    };

}