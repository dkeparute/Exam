function examSort(state, by) {
    const examList = state.slice();

    switch (by) {
        case 'name_asc':
            examList.sort(function (a, b) {
                const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
            break;
        case 'name_desc':
            examList.sort((a, b) => {
                const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
                // names must be equal
                return 0;
            });
            break;
        case 'weight_asc':
            examList.sort((a, b) => {
                return a.weight - b.weight;
            });
            break;
        case 'weight_desc':
            examList.sort((a, b) => {
                return b.weight - a.weight;
            });
            break;
        default:
    }
    return examList;
}
export default examSort;