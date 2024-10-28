import Directory from "./components/directory/directory.component";

import categories from "./data/categories.json";

const App = () => {
  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
};

export default App;
