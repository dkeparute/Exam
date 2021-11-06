function examSort(state, by) {
    const copy = state.slice();

    switch (by) {
        case 'name_asc':
            copy.sort(function (a, b) {
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
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
            copy.sort(function (a, b) {
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
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
            copy.sort(function (a, b) {
                return a.weight - b.weight;
            });
            break;
        case 'weight_desc':
            copy.sort(function (a, b) {
                return b.weight - a.weight;
            });
            break;
        default:
    }
    return copy;
}
export default examSort;