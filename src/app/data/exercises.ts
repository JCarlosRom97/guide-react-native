type Exercise = {
    id: number,
    name: string,
    url:string
}

export const exercisesJson: Exercise[] = [
    {
        id: 1,
        name: "SmartCounter with Hold-to-Increment",
        url:"counter"
    },
    {
        id: 2,
        name: "SearchUsers with Debounce and Request Cancellation",
        url:"search-debounce"
    },
    {
        id: 3,
        name: "Optimized Product List with Filtering and Sorting",
        url:"list-sorting"
    },
    {
        id: 4,
        name: "Reusable useAsync Custom Hook",
        url:"custom-hook"
    },
    {
        id: 5,
        name: "Dashboard Architecture Design",
        url: "dashboard"

    }
]