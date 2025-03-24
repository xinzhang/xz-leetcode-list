import React, { useState, useEffect } from "react";
import algorithmData from "../data/algorithmData";

const AlgorithmTable = () => {
  const [filter, setFilter] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [topicFilter, setTopicFilter] = useState("all");
  const [sortColumn, setSortColumn] = useState("category");
  const [sortDirection, setSortDirection] = useState("asc");
  const [exportReady, setExportReady] = useState(false);
  const [completedProblems, setCompletedProblems] = useState({});

  // Unique category filter options
  // 将未使用的 categories 变量注释掉
  // const categories = [
  //   "all",
  //   ...new Set(algorithmData.map((item) => item.category)),
  // ];
  const difficulties = ["all", "Easy", "Medium", "Hard"];
  const allTopics = new Set();
  algorithmData.forEach((item) => {
    item.topics.forEach((topic) => allTopics.add(topic));
  });
  const topics = ["all", ...Array.from(allTopics).sort()];

  // Load completed problems from localStorage
  useEffect(() => {
    const savedCompletedProblems = localStorage.getItem("completedProblems");
    if (savedCompletedProblems) {
      setCompletedProblems(JSON.parse(savedCompletedProblems));
    }
    setExportReady(true);
  }, []);

  // Save completed problems to localStorage when it changes
  useEffect(() => {
    localStorage.setItem(
      "completedProblems",
      JSON.stringify(completedProblems)
    );
  }, [completedProblems]);

  // Handle checkbox change
  const handleCheckboxChange = (number) => {
    setCompletedProblems((prev) => {
      const newState = { ...prev };
      newState[number] = !prev[number];
      return newState;
    });
  };

  // Reset all completed problems
  const resetAllCompleted = () => {
    setCompletedProblems({});
  };

  // Handle sorting
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  // Sort and filter data
  const filteredAndSortedData = algorithmData
    .filter((item) => {
      const matchesSearch =
        filter === "" ||
        item.title.toLowerCase().includes(filter.toLowerCase()) ||
        item.number.toLowerCase().includes(filter.toLowerCase());

      const matchesDifficulty =
        difficultyFilter === "all" || item.difficulty === difficultyFilter;

      const matchesTopic =
        topicFilter === "all" || item.topics.includes(topicFilter);

      return matchesSearch && matchesDifficulty && matchesTopic;
    })
    .sort((a, b) => {
      let valueA, valueB;

      if (sortColumn === "number") {
        valueA = parseInt(a.number.replace(/\D/g, "")) || 0;
        valueB = parseInt(b.number.replace(/\D/g, "")) || 0;
      } else {
        valueA = a[sortColumn];
        valueB = b[sortColumn];
      }

      if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
      if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

  // Generate CSV data for export
  const generateCSV = () => {
    const headers = [
      "Number",
      "Title",
      "Category",
      "Subcategory",
      "Topics",
      "Difficulty",
      "Completed",
    ];

    const csvRows = [
      headers.join(","),
      ...filteredAndSortedData.map((item) =>
        [
          item.number,
          `"${item.title.replace(/"/g, '""')}"`,
          item.category,
          item.subcategory,
          `"${item.topics.join(", ")}"`,
          item.difficulty,
          completedProblems[item.number] ? "Yes" : "No",
        ].join(",")
      ),
    ];

    return csvRows.join("\n");
  };

  // Handle CSV download
  const exportToCSV = () => {
    const csvData = generateCSV();
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "algorithm_problems.csv");
    a.click();

    // Clean up
    URL.revokeObjectURL(url);
  };

  return (
    <div className='p-4 max-w-full'>
      <h1 className='text-2xl font-bold mb-4'>Algorithm Problems Collection</h1>

      <div className='mb-6 flex flex-wrap gap-4'>
        <div className='w-full md:w-64'>
          <label className='block text-sm font-medium mb-1'>Search:</label>
          <input
            type='text'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder='Search by title or number...'
            className='w-full p-2 border rounded'
          />
        </div>

        <div className='w-full md:w-48'>
          <label className='block text-sm font-medium mb-1'>Category:</label>
          <select
            value={topicFilter}
            onChange={(e) => setTopicFilter(e.target.value)}
            className='w-full p-2 border rounded'
          >
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        <div className='w-full md:w-36'>
          <label className='block text-sm font-medium mb-1'>Difficulty:</label>
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className='w-full p-2 border rounded'
          >
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
        </div>

        {exportReady && (
          <div className='w-full md:w-auto flex items-end gap-2'>
            <button
              onClick={resetAllCompleted}
              className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded'
            >
              Reset Completed
            </button>
            <button
              onClick={exportToCSV}
              className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'
            >
              Export CSV
            </button>
          </div>
        )}
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 px-4 py-2'>Completed</th>
              <th
                className='border border-gray-300 px-4 py-2 cursor-pointer'
                onClick={() => handleSort("number")}
              >
                Number{" "}
                {sortColumn === "number" &&
                  (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th
                className='border border-gray-300 px-4 py-2 cursor-pointer'
                onClick={() => handleSort("title")}
              >
                Title{" "}
                {sortColumn === "title" &&
                  (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th
                className='border border-gray-300 px-4 py-2 cursor-pointer'
                onClick={() => handleSort("category")}
              >
                Category{" "}
                {sortColumn === "category" &&
                  (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th className='border border-gray-300 px-4 py-2'>Topics</th>
              <th
                className='border border-gray-300 px-4 py-2 cursor-pointer'
                onClick={() => handleSort("difficulty")}
              >
                Difficulty{" "}
                {sortColumn === "difficulty" &&
                  (sortDirection === "asc" ? "↑" : "↓")}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedData.map((item, index) => (
              <tr
                key={index}
                className={
                  completedProblems[item.number]
                    ? "bg-green-50"
                    : index % 2 === 0
                    ? "bg-white"
                    : "bg-gray-50"
                }
              >
                <td className='border border-gray-300 px-4 py-2 text-center'>
                  <input
                    type='checkbox'
                    checked={!!completedProblems[item.number]}
                    onChange={() => handleCheckboxChange(item.number)}
                    className='w-5 h-5 cursor-pointer'
                  />
                </td>
                <td className='border border-gray-300 px-4 py-2'>
                  {item.number}
                </td>
                <td className='border border-gray-300 px-4 py-2'>
                  <a
                    href={`https://leetcode.com/problems/${item.link}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:text-blue-800 hover:underline'
                  >
                    {item.title}
                  </a>
                </td>
                <td className='border border-gray-300 px-4 py-2'>
                  {item.subcategory
                    ? `${item.category} - ${item.subcategory}`
                    : item.category}
                </td>
                <td className='border border-gray-300 px-4 py-2'>
                  <div className='flex flex-wrap gap-1'>
                    {item.topics.map((topic, i) => (
                      <span
                        key={i}
                        className='inline-block px-2 py-1 text-xs rounded bg-blue-100 text-blue-800'
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </td>
                <td className='border border-gray-300 px-4 py-2'>
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs ${
                      item.difficulty === "Easy"
                        ? "bg-green-100 text-green-800"
                        : item.difficulty === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.difficulty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='mt-4 text-sm text-gray-500'>
        Showing {filteredAndSortedData.length} of {algorithmData.length}{" "}
        problems
      </div>
    </div>
  );
};

export default AlgorithmTable;
