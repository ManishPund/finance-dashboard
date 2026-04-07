// Custom storage for redux-persist
const createStorage = () => {
  return {
    getItem: (key) => {
      try {
        const item = localStorage.getItem(key);
        return item ? Promise.resolve(item) : Promise.resolve(null);
      } catch (error) {
        console.error("Error getting item from localStorage:", error);
        return Promise.resolve(null);
      }
    },
    setItem: (key, value) => {
      try {
        localStorage.setItem(key, value);
        return Promise.resolve();
      } catch (error) {
        console.error("Error setting item in localStorage:", error);
        return Promise.resolve();
      }
    },
    removeItem: (key) => {
      try {
        localStorage.removeItem(key);
        return Promise.resolve();
      } catch (error) {
        console.error("Error removing item from localStorage:", error);
        return Promise.resolve();
      }
    },
  };
};

export default createStorage();
