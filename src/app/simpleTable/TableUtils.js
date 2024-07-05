 export function restructureArray(data) {
    console.log(data);
    // Initialize an object to store nested relationships
    let nestedData = {};

    // Helper function to recursively build nested structure
    function buildNested(obj, keys, index) {
        // Base case: if we have processed all keys, return the object
        if (index === keys.length) {
            return obj;
        }

        // Get the current key
        let key = keys[index];

        // Initialize nested object if it doesn't exist
        obj[key] = obj[key] || {};

        // Recursively build nested structure
        obj[key] = buildNested(obj[key], keys, index + 1);

        return obj;
    }

    // Loop through each object in the original array
    data.forEach(obj => {
        let keys = Object.values(obj); // Use values of the object for hierarchy
        nestedData = buildNested(nestedData, keys, 0);
    });

    // Convert nested structure back to an array
    let result = convertNestedToArray(nestedData);

    return result;
}

// Helper function to convert nested structure back to array
function convertNestedToArray(nestedData) {
    let result = [];

    // Helper function to recursively convert nested structure to array
    function traverse(obj, depth) {
        Object.keys(obj).forEach(key => {
            let value = obj[key];

            // Create an object with current key and depth
            let newObj = { [depth]: key };

            if (typeof value === 'object' && !Array.isArray(value)) {
                // Recursively traverse nested objects
                traverse(value, depth + 1);
            } else {
                // Add leaf object to result array
                result.push({ ...newObj, ...value });
            }
        });
    }

    // Start traversal from the root of nestedData with depth 0
    traverse(nestedData, 0);

    return result;
}

// Example usage:


// let restructuredData = restructureArray(data);
// console.log(restructuredData);
