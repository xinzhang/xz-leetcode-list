import React, { useState, useEffect } from "react";

const AlgorithmTable = () => {
  const [filter, setFilter] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [topicFilter, setTopicFilter] = useState("all");
  const [sortColumn, setSortColumn] = useState("category");
  const [sortDirection, setSortDirection] = useState("asc");
  const [exportReady, setExportReady] = useState(false);
  const [completedProblems, setCompletedProblems] = useState({});

  const algorithmData = [
    // Image 1 - BASIS
    {
      category: "Basis",
      subcategory: "",
      number: "225",
      title: "Implement Stack using Queues",
      topics: ["Stack", "Queue", "Design"],
      difficulty: "Easy",
    },
    {
      category: "Basis",
      subcategory: "",
      number: "346",
      title: "Moving Average from Data Stream",
      topics: ["Array", "Queue", "Design", "Data Stream"],
      difficulty: "Easy",
    },
    {
      category: "Basis",
      subcategory: "",
      number: "622",
      title: "Design Circular Queue",
      topics: ["Array", "Queue", "Linked List", "Design"],
      difficulty: "Medium",
    },
    {
      category: "Basis",
      subcategory: "",
      number: "23",
      title: "Merge K Sorted Lists",
      topics: [
        "Heap (Priority Queue)",
        "Linked List",
        "Merge Sort",
        "Divide and Conquer",
      ],
      difficulty: "Hard",
    },
    {
      category: "Basis",
      subcategory: "",
      number: "218",
      title: "The Skyline Problem",
      topics: [
        "Array",
        "Tree Array",
        "Segment Tree",
        "Heap (Priority Queue)",
        "Ordered Set",
        "Line Sweep",
        "Divide and Conquer",
      ],
      difficulty: "Hard",
    },
    {
      category: "Basis",
      subcategory: "",
      number: "239",
      title: "Sliding Window Maximum",
      topics: [
        "Array",
        "Heap (Priority Queue)",
        "Queue",
        "Monotonic Queue",
        "Sliding Window",
      ],
      difficulty: "Hard",
    },

    // Image 1 - QUEUE
    {
      category: "Queue",
      subcategory: "",
      number: "295",
      title: "Find Median from Data Stream",
      topics: [
        "Heap (Priority Queue)",
        "Sorting",
        "Two Pointers",
        "Design",
        "Data Stream",
      ],
      difficulty: "Hard",
    },

    // Image 1 - MONOTONIC STACK
    {
      category: "Monotonic Stack",
      subcategory: "",
      number: "347",
      title: "Top K Frequent Elements",
      topics: [
        "Array",
        "Hash Table",
        "Queue",
        "Sorting",
        "Bucket Sort",
        "Divide and Conquer",
        "Quickselect",
        "Counting",
      ],
      difficulty: "Medium",
    },
    {
      category: "Monotonic Stack",
      subcategory: "",
      number: "451",
      title: "Sort Characters By Frequency",
      topics: [
        "String",
        "Hash Table",
        "Heap (Priority Queue)",
        "Sorting",
        "Bucket Sort",
        "Counting",
      ],
      difficulty: "Medium",
    },
    {
      category: "Monotonic Stack",
      subcategory: "",
      number: "703",
      title: "Kth Largest Element in a Stream",
      topics: [
        "Tree",
        "Binary Tree",
        "Binary Search Tree",
        "Heap (Priority Queue)",
        "Design",
        "Data Stream",
      ],
      difficulty: "Easy",
    },
    {
      category: "Monotonic Stack",
      subcategory: "",
      number: "973",
      title: "K Closest Points to Origin",
      topics: [
        "Array",
        "Heap (Priority Queue)",
        "Sorting",
        "Divide and Conquer",
        "Quickselect",
        "Math",
      ],
      difficulty: "Medium",
    },
    {
      category: "Monotonic Stack",
      subcategory: "",
      number: "1296",
      title: "Divide Array in Sets of K Consecutive Numbers",
      topics: ["Array", "Hash Table", "Sorting", "Greedy"],
      difficulty: "Medium",
    },

    // Image 1 - HASH TABLE
    {
      category: "Hash Table",
      subcategory: "",
      number: "1",
      title: "Two Sum",
      topics: ["Array", "Hash Table"],
      difficulty: "Easy",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "15",
      title: "3Sum",
      topics: ["Array", "Sorting", "Two Pointers"],
      difficulty: "Medium",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "18",
      title: "4Sum",
      topics: ["Array", "Sorting", "Two Pointers"],
      difficulty: "Medium",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "36",
      title: "Valid Sudoku",
      topics: ["Array", "Hash Table", "Matrix"],
      difficulty: "Medium",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "41",
      title: "First Missing Positive",
      topics: ["Array", "Hash Table"],
      difficulty: "Hard",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "49",
      title: "Group Anagrams",
      topics: ["Array", "String", "Hash Table", "Sorting"],
      difficulty: "Medium",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "128",
      title: "Longest Consecutive Sequence",
      topics: ["Array", "Hash Table", "Union Find"],
      difficulty: "Medium",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "136",
      title: "Single Number",
      topics: ["Array", "Bit Manipulation"],
      difficulty: "Easy",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "149",
      title: "Max Points on a Line",
      topics: ["Array", "Hash Table", "Math", "Geometry"],
      difficulty: "Hard",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "202",
      title: "Happy Number",
      topics: ["Hash Table", "Two Pointers", "Math"],
      difficulty: "Easy",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "205",
      title: "Isomorphic Strings",
      topics: ["String", "Hash Table"],
      difficulty: "Easy",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "217",
      title: "Contains Duplicate",
      topics: ["Array", "Hash Table", "Sorting"],
      difficulty: "Easy",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "219",
      title: "Contains Duplicate II",
      topics: ["Array", "Hash Table", "Sliding Window"],
      difficulty: "Easy",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "220",
      title: "Contains Duplicate III",
      topics: [
        "Array",
        "Ordered Set",
        "Sorting",
        "Bucket Sort",
        "Sliding Window",
      ],
      difficulty: "Hard",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "242",
      title: "Valid Anagram",
      topics: ["String", "Hash Table", "Sorting"],
      difficulty: "Easy",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "268",
      title: "Missing Number",
      topics: [
        "Array",
        "Hash Table",
        "Sorting",
        "Math",
        "Binary Search",
        "Bit Manipulation",
      ],
      difficulty: "Easy",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "349",
      title: "Intersection of Two Arrays",
      topics: [
        "Array",
        "Hash Table",
        "Sorting",
        "Two Pointers",
        "Binary Search",
      ],
      difficulty: "Easy",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "350",
      title: "Intersection of Two Arrays II",
      topics: [
        "Array",
        "Hash Table",
        "Sorting",
        "Two Pointers",
        "Binary Search",
      ],
      difficulty: "Easy",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "359",
      title: "Logger Rate Limiter",
      topics: ["Hash Table", "Design"],
      difficulty: "Easy",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "383",
      title: "Ransom Note",
      topics: ["String", "Hash Table", "Counting"],
      difficulty: "Easy",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "387",
      title: "First Unique Character in a String",
      topics: ["String", "Hash Table", "Queue", "Counting"],
      difficulty: "Easy",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "442",
      title: "Find All Duplicates in an Array",
      topics: ["Array", "Hash Table"],
      difficulty: "Medium",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "447",
      title: "Number of Boomerangs",
      topics: ["Array", "Hash Table", "Math"],
      difficulty: "Medium",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "451",
      title: "Sort Characters By Frequency",
      topics: [
        "String",
        "Hash Table",
        "Heap (Priority Queue)",
        "Sorting",
        "Bucket Sort",
        "Counting",
      ],
      difficulty: "Medium",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "454",
      title: "4Sum II",
      topics: ["Array", "Hash Table"],
      difficulty: "Medium",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "599",
      title: "Minimum Index Sum of Two Lists",
      topics: ["Array", "String", "Hash Table"],
      difficulty: "Easy",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "705",
      title: "Design HashSet",
      topics: ["Array", "Hash Table", "Linked List", "Hash Function", "Design"],
      difficulty: "Easy",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "706",
      title: "Design HashMap",
      topics: ["Array", "Hash Table", "Linked List", "Hash Function", "Design"],
      difficulty: "Easy",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "811",
      title: "Subdomain Visit Count",
      topics: ["Array", "String", "Hash Table", "Counting"],
      difficulty: "Medium",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "1941",
      title: "Check if All Characters Have Equal Number of Occurrences",
      topics: ["String", "Hash Table", "Counting"],
      difficulty: "Easy",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "LCR 120",
      title: "Finding a Copy of a Document",
      topics: ["Array", "Hash Table", "Sorting"],
      difficulty: "Easy",
    },
    {
      category: "Hash Table",
      subcategory: "",
      number: "LCR 186",
      title: "Determination of the Dynasty of Cultural Relics",
      topics: ["Array", "Sorting"],
      difficulty: "Easy",
    },

    // Image 2 - LINKED LIST BASIS
    {
      category: "Linked List",
      subcategory: "Basis",
      number: "25",
      title: "Reverse Nodes in k-Group",
      topics: ["Linked List", "Recursion"],
      difficulty: "Hard",
    },
    {
      category: "Linked List",
      subcategory: "Basis",
      number: "61",
      title: "Rotate List",
      topics: ["Linked List", "Two Pointers"],
      difficulty: "Medium",
    },
    {
      category: "Linked List",
      subcategory: "Basis",
      number: "82",
      title: "Remove Duplicates from Sorted List II",
      topics: ["Linked List", "Two Pointers"],
      difficulty: "Medium",
    },
    {
      category: "Linked List",
      subcategory: "Basis",
      number: "83",
      title: "Remove Duplicates from Sorted List",
      topics: ["Linked List"],
      difficulty: "Easy",
    },
    {
      category: "Linked List",
      subcategory: "Basis",
      number: "92",
      title: "Reverse Linked List II",
      topics: ["Linked List"],
      difficulty: "Medium",
    },
    {
      category: "Linked List",
      subcategory: "Basis",
      number: "138",
      title: "Copy List with Random Pointer",
      topics: ["Hash Table", "Linked List"],
      difficulty: "Medium",
    },
    {
      category: "Linked List",
      subcategory: "Basis",
      number: "203",
      title: "Remove Linked List Elements",
      topics: ["Linked List", "Recursion"],
      difficulty: "Easy",
    },
    {
      category: "Linked List",
      subcategory: "Basis",
      number: "206",
      title: "Reverse Linked List",
      topics: ["Linked List", "Recursion"],
      difficulty: "Easy",
    },
    {
      category: "Linked List",
      subcategory: "Basis",
      number: "234",
      title: "Palindrome Linked List",
      topics: ["Stack", "Linked List", "Two Pointers", "Recursion"],
      difficulty: "Easy",
    },
    {
      category: "Linked List",
      subcategory: "Basis",
      number: "328",
      title: "Odd Even Linked List",
      topics: ["Linked List"],
      difficulty: "Medium",
    },
    {
      category: "Linked List",
      subcategory: "Basis",
      number: "430",
      title: "Flatten a Multilevel Doubly Linked List",
      topics: ["Linked List", "Doubly-Linked List", "Depth-First Search"],
      difficulty: "Medium",
    },
    {
      category: "Linked List",
      subcategory: "Basis",
      number: "707",
      title: "Design Linked List",
      topics: ["Linked List", "Design"],
      difficulty: "Medium",
    },

    // Image 2 - LINKED LIST SORTING
    {
      category: "Linked List",
      subcategory: "Sorting",
      number: "21",
      title: "Merge Two Sorted Lists",
      topics: ["Linked List", "Recursion"],
      difficulty: "Easy",
    },
    {
      category: "Linked List",
      subcategory: "Sorting",
      number: "23",
      title: "Merge k Sorted Lists",
      topics: [
        "Heap (Priority Queue)",
        "Linked List",
        "Divide and Conquer",
        "Merge Sort",
      ],
      difficulty: "Hard",
    },
    {
      category: "Linked List",
      subcategory: "Sorting",
      number: "147",
      title: "Insertion Sort List",
      topics: ["Linked List", "Sorting"],
      difficulty: "Medium",
    },
    {
      category: "Linked List",
      subcategory: "Sorting",
      number: "148",
      title: "Sort List",
      topics: [
        "Linked List",
        "Two Pointers",
        "Divide and Conquer",
        "Sorting",
        "Merge Sort",
      ],
      difficulty: "Medium",
    },

    // Image 2 - LINKED LIST TWO POINTERS
    {
      category: "Linked List",
      subcategory: "Two Pointers",
      number: "2",
      title: "Add Two Numbers",
      topics: ["Linked List", "Math", "Recursion"],
      difficulty: "Medium",
    },
    {
      category: "Linked List",
      subcategory: "Two Pointers",
      number: "19",
      title: "Remove Nth Node From End of List",
      topics: ["Linked List", "Two Pointers"],
      difficulty: "Medium",
    },
    {
      category: "Linked List",
      subcategory: "Two Pointers",
      number: "141",
      title: "Linked List Cycle",
      topics: ["Hash Table", "Linked List", "Two Pointers"],
      difficulty: "Easy",
    },
    {
      category: "Linked List",
      subcategory: "Two Pointers",
      number: "142",
      title: "Linked List Cycle II",
      topics: ["Hash Table", "Linked List", "Two Pointers"],
      difficulty: "Medium",
    },
    {
      category: "Linked List",
      subcategory: "Two Pointers",
      number: "143",
      title: "Reorder List",
      topics: ["Stack", "Linked List", "Two Pointers", "Recursion"],
      difficulty: "Medium",
    },
    {
      category: "Linked List",
      subcategory: "Two Pointers",
      number: "160",
      title: "Intersection of Two Linked Lists",
      topics: ["Hash Table", "Linked List", "Two Pointers"],
      difficulty: "Easy",
    },
    {
      category: "Linked List",
      subcategory: "Two Pointers",
      number: "445",
      title: "Add Two Numbers II",
      topics: ["Stack", "Linked List", "Math"],
      difficulty: "Medium",
    },
    {
      category: "Linked List",
      subcategory: "Two Pointers",
      number: "876",
      title: "Middle of the Linked List",
      topics: ["Linked List", "Two Pointers"],
      difficulty: "Easy",
    },
    {
      category: "Linked List",
      subcategory: "Two Pointers",
      number: "LCR 140",
      title: "Training Program II",
      topics: ["Linked List", "Two Pointers"],
      difficulty: "Easy",
    },

    // Image 2 - STACK BASIS
    {
      category: "Stack",
      subcategory: "Basis",
      number: "20",
      title: "Valid Parentheses",
      topics: ["String", "Stack"],
      difficulty: "Easy",
    },
    {
      category: "Stack",
      subcategory: "Basis",
      number: "32",
      title: "Longest Valid Parentheses",
      topics: ["String", "Stack", "Dynamic Programming"],
      difficulty: "Hard",
    },
    {
      category: "Stack",
      subcategory: "Basis",
      number: "71",
      title: "Simplify Path",
      topics: ["String", "Stack"],
      difficulty: "Medium",
    },
    {
      category: "Stack",
      subcategory: "Basis",
      number: "150",
      title: "Evaluate Reverse Polish Notation",
      topics: ["Array", "Stack", "Math"],
      difficulty: "Medium",
    },
    {
      category: "Stack",
      subcategory: "Basis",
      number: "155",
      title: "Min Stack",
      topics: ["Stack", "Design"],
      difficulty: "Medium",
    },
    {
      category: "Stack",
      subcategory: "Basis",
      number: "227",
      title: "Basic Calculator II",
      topics: ["Hash Table", "Stack", "Math"],
      difficulty: "Medium",
    },
    {
      category: "Stack",
      subcategory: "Basis",
      number: "232",
      title: "Implement Queue using Stacks",
      topics: ["Stack", "Queue", "Design"],
      difficulty: "Easy",
    },
    {
      category: "Stack",
      subcategory: "Basis",
      number: "394",
      title: "Decode String",
      topics: ["String", "Stack", "Recursion"],
      difficulty: "Medium",
    },
    {
      category: "Stack",
      subcategory: "Basis",
      number: "739",
      title: "Daily Temperatures",
      topics: ["Array", "Stack", "Monotonic Stack"],
      difficulty: "Medium",
    },
    {
      category: "Stack",
      subcategory: "Basis",
      number: "946",
      title: "Validate Stack Sequences",
      topics: ["Array", "Stack", "Simulation"],
      difficulty: "Medium",
    },
    {
      category: "Stack",
      subcategory: "Basis",
      number: "1047",
      title: "Remove All Adjacent Duplicates In String",
      topics: ["String", "Stack"],
      difficulty: "Easy",
    },
    {
      category: "Stack",
      subcategory: "Basis",
      number: "LCR 123",
      title: "Book Arrangement I",
      topics: ["Stack", "Linked List", "Two Pointers", "Recursion"],
      difficulty: "Easy",
    },
    {
      category: "Stack",
      subcategory: "Basis",
      number: "LCR 125",
      title: "Book Arrangement II",
      topics: ["Stack", "Queue", "Design"],
      difficulty: "Easy",
    },

    // Image 2 - STACK MONOTONIC STACK
    {
      category: "Stack",
      subcategory: "Monotonic Stack",
      number: "42",
      title: "Trapping Rain Water",
      topics: [
        "Array",
        "Stack",
        "Monotonic Stack",
        "Two Pointers",
        "Dynamic Programming",
      ],
      difficulty: "Hard",
    },
    {
      category: "Stack",
      subcategory: "Monotonic Stack",
      number: "84",
      title: "Largest Rectangle in Histogram",
      topics: ["Array", "Stack", "Monotonic Stack"],
      difficulty: "Hard",
    },
    {
      category: "Stack",
      subcategory: "Monotonic Stack",
      number: "85",
      title: "Maximal Rectangle",
      topics: [
        "Array",
        "Stack",
        "Monotonic Stack",
        "Matrix",
        "Dynamic Programming",
      ],
      difficulty: "Hard",
    },
    {
      category: "Stack",
      subcategory: "Monotonic Stack",
      number: "316",
      title: "Remove Duplicate Letters",
      topics: ["String", "Stack", "Monotonic Stack", "Greedy"],
      difficulty: "Medium",
    },
    {
      category: "Stack",
      subcategory: "Monotonic Stack",
      number: "496",
      title: "Next Greater Element I",
      topics: ["Array", "Hash Table", "Stack", "Monotonic Stack"],
      difficulty: "Easy",
    },
    {
      category: "Stack",
      subcategory: "Monotonic Stack",
      number: "503",
      title: "Next Greater Element II",
      topics: ["Array", "Stack", "Monotonic Stack"],
      difficulty: "Medium",
    },
    {
      category: "Stack",
      subcategory: "Monotonic Stack",
      number: "739",
      title: "Daily Temperatures",
      topics: ["Array", "Stack", "Monotonic Stack"],
      difficulty: "Medium",
    },
    {
      category: "Stack",
      subcategory: "Monotonic Stack",
      number: "862",
      title: "Shortest Subarray with Sum at Least K",
      topics: [
        "Array",
        "Heap (Priority Queue)",
        "Queue",
        "Monotonic Queue",
        "Prefix Sum",
        "Binary Search",
        "Sliding Window",
      ],
      difficulty: "Hard",
    },
    {
      category: "Stack",
      subcategory: "Monotonic Stack",
      number: "901",
      title: "Online Stock Span",
      topics: [
        "Monotonic Stack",
        "Heap (Priority Queue)",
        "Design",
        "Data Stream",
      ],
      difficulty: "Medium",
    },

    // Image 3 - SLIDING WINDOW FIXED-LENGTH WINDOW
    {
      category: "Sliding Window",
      subcategory: "Fixed-Length Window",
      number: "220",
      title: "Contains Duplicate III",
      topics: [
        "Array",
        "Sorting",
        "Bucket Sort",
        "Ordered Set",
        "Sliding Window",
      ],
      difficulty: "Hard",
    },
    {
      category: "Sliding Window",
      subcategory: "Fixed-Length Window",
      number: "239",
      title: "Sliding Window Maximum",
      topics: [
        "Array",
        "Heap (Priority Queue)",
        "Queue",
        "Monotonic Queue",
        "Sliding Window",
      ],
      difficulty: "Hard",
    },
    {
      category: "Sliding Window",
      subcategory: "Fixed-Length Window",
      number: "438",
      title: "Find All Anagrams in a String",
      topics: ["String", "Hash Table", "Sliding Window"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Fixed-Length Window",
      number: "480",
      title: "Sliding Window Median",
      topics: [
        "Array",
        "Hash Table",
        "Heap (Priority Queue)",
        "Sliding Window",
      ],
      difficulty: "Hard",
    },
    {
      category: "Sliding Window",
      subcategory: "Fixed-Length Window",
      number: "567",
      title: "Permutation in String",
      topics: ["String", "Hash Table", "Two Pointers", "Sliding Window"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Fixed-Length Window",
      number: "643",
      title: "Maximum Average Subarray I",
      topics: ["Array", "Sliding Window"],
      difficulty: "Easy",
    },
    {
      category: "Sliding Window",
      subcategory: "Fixed-Length Window",
      number: "683",
      title: "K Empty Slots",
      topics: ["Array", "Tree Array", "Ordered Set", "Sliding Window"],
      difficulty: "Hard",
    },
    {
      category: "Sliding Window",
      subcategory: "Fixed-Length Window",
      number: "995",
      title: "Minimum Number of K Consecutive Bit Flips",
      topics: [
        "Array",
        "Queue",
        "Prefix Sum",
        "Sliding Window",
        "Bit Manipulation",
      ],
      difficulty: "Hard",
    },
    {
      category: "Sliding Window",
      subcategory: "Fixed-Length Window",
      number: "1052",
      title: "Grumpy Bookstore Owner",
      topics: ["Array", "Sliding Window"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Fixed-Length Window",
      number: "1100",
      title: "Find K-Length Substrings With No Repeated Characters",
      topics: ["String", "Hash Table", "Sliding Window"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Fixed-Length Window",
      number: "1151",
      title: "Minimum Swaps to Group All 1's Together",
      topics: ["Array", "Sliding Window"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Fixed-Length Window",
      number: "1176",
      title: "Fitness Program Evaluation",
      topics: ["Array", "Sliding Window"],
      difficulty: "Easy",
    },
    {
      category: "Sliding Window",
      subcategory: "Fixed-Length Window",
      number: "1343",
      title:
        "Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold",
      topics: ["Array", "Sliding Window"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Fixed-Length Window",
      number: "1423",
      title: "Maximum Points You Can Obtain from Cards",
      topics: ["Array", "Prefix Sum", "Sliding Window"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Fixed-Length Window",
      number: "1456",
      title: "Maximum Number of Vowels in a Substring of Given Length",
      topics: ["String", "Sliding Window"],
      difficulty: "Medium",
    },

    // Image 3 - SLIDING WINDOW VARIABLE-LENGTH WINDOW
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "3",
      title: "Longest Substring Without Repeating Characters",
      topics: ["String", "Hash Table", "Sliding Window"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "76",
      title: "Minimum Window Substring",
      topics: ["String", "Hash Table", "Sliding Window"],
      difficulty: "Hard",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "159",
      title: "Longest Substring with At Most Two Distinct Characters",
      topics: ["String", "Hash Table", "Sliding Window"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "209",
      title: "Minimum Size Subarray Sum",
      topics: ["Array", "Prefix Sum", "Binary Search", "Sliding Window"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "340",
      title: "Longest Substring with At Most K Distinct Characters",
      topics: ["String", "Hash Table", "Sliding Window"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "424",
      title: "Longest Repeating Character Replacement",
      topics: ["String", "Hash Table", "Sliding Window"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "467",
      title: "Unique Substrings in Wraparound String",
      topics: ["String", "Dynamic Programming"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "485",
      title: "Max Consecutive Ones",
      topics: ["Array"],
      difficulty: "Easy",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "487",
      title: "Max Consecutive Ones II",
      topics: ["Array", "Sliding Window", "Dynamic Programming"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "674",
      title: "Longest Continuous Increasing Subsequence",
      topics: ["Array"],
      difficulty: "Easy",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "713",
      title: "Subarray Product Less Than K",
      topics: ["Array", "Sliding Window"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "718",
      title: "Maximum Length of Repeated Subarray",
      topics: [
        "Array",
        "Binary Search",
        "Sliding Window",
        "Dynamic Programming",
        "Hash Function",
        "Rolling Hash",
      ],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "727",
      title: "Minimum Window Subsequence",
      topics: ["String", "Sliding Window", "Dynamic Programming"],
      difficulty: "Hard",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "795",
      title: "Number of Subarrays with Bounded Maximum",
      topics: ["Array", "Two Pointers"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "904",
      title: "Fruit Into Baskets",
      topics: ["Array", "Hash Table", "Sliding Window"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "992",
      title: "Subarrays with K Different Integers",
      topics: ["Array", "Hash Table", "Counting", "Sliding Window"],
      difficulty: "Hard",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "1004",
      title: "Max Consecutive Ones III",
      topics: ["Array", "Prefix Sum", "Binary Search", "Sliding Window"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "1208",
      title: "Get Equal Substrings Within Budget",
      topics: ["String", "Prefix Sum", "Binary Search", "Sliding Window"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "1358",
      title: "Number of Substrings Containing All Three Characters",
      topics: ["String", "Hash Table", "Sliding Window"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "1438",
      title:
        "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit",
      topics: [
        "Array",
        "Heap (Priority Queue)",
        "Queue",
        "Monotonic Queue",
        "Ordered Set",
        "Sliding Window",
      ],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "1493",
      title: "Longest Subarray of 1's After Deleting One Element",
      topics: ["Array", "Sliding Window", "Dynamic Programming"],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "1658",
      title: "Minimum Operations to Reduce X to Zero",
      topics: [
        "Array",
        "Hash Table",
        "Prefix Sum",
        "Binary Search",
        "Sliding Window",
      ],
      difficulty: "Medium",
    },
    {
      category: "Sliding Window",
      subcategory: "Variable-Length Window",
      number: "1695",
      title: "Maximum Erasure Value",
      topics: ["Array", "Hash Table", "Sliding Window"],
      difficulty: "Medium",
    },

    // Image 4 - TWO POINTERS COLLISION POINTERS
    {
      category: "Two Pointers",
      subcategory: "Collision Pointers",
      number: "11",
      title: "Container With Most Water",
      topics: ["Array", "Two Pointers", "Greedy"],
      difficulty: "Medium",
    },
    {
      category: "Two Pointers",
      subcategory: "Collision Pointers",
      number: "15",
      title: "3Sum",
      topics: ["Array", "Two Pointers", "Sorting"],
      difficulty: "Medium",
    },
    {
      category: "Two Pointers",
      subcategory: "Collision Pointers",
      number: "16",
      title: "3Sum Closest",
      topics: ["Array", "Two Pointers", "Sorting"],
      difficulty: "Medium",
    },
    {
      category: "Two Pointers",
      subcategory: "Collision Pointers",
      number: "18",
      title: "4Sum",
      topics: ["Array", "Two Pointers", "Sorting"],
      difficulty: "Medium",
    },
    {
      category: "Two Pointers",
      subcategory: "Collision Pointers",
      number: "42",
      title: "Trapping Rain Water",
      topics: [
        "Array",
        "Stack",
        "Monotonic Stack",
        "Two Pointers",
        "Dynamic Programming",
      ],
      difficulty: "Hard",
    },
    {
      category: "Two Pointers",
      subcategory: "Collision Pointers",
      number: "75",
      title: "Sort Colors",
      topics: ["Array", "Two Pointers", "Sorting"],
      difficulty: "Medium",
    },
    {
      category: "Two Pointers",
      subcategory: "Collision Pointers",
      number: "125",
      title: "Valid Palindrome",
      topics: ["String", "Two Pointers"],
      difficulty: "Easy",
    },
    {
      category: "Two Pointers",
      subcategory: "Collision Pointers",
      number: "167",
      title: "Two Sum II - Input Array Is Sorted",
      topics: ["Array", "Two Pointers", "Binary Search"],
      difficulty: "Medium",
    },
    {
      category: "Two Pointers",
      subcategory: "Collision Pointers",
      number: "259",
      title: "3Sum Smaller",
      topics: ["Array", "Two Pointers", "Sorting", "Binary Search"],
      difficulty: "Medium",
    },
    {
      category: "Two Pointers",
      subcategory: "Collision Pointers",
      number: "344",
      title: "Reverse String",
      topics: ["String", "Two Pointers"],
      difficulty: "Easy",
    },
    {
      category: "Two Pointers",
      subcategory: "Collision Pointers",
      number: "345",
      title: "Reverse Vowels of a String",
      topics: ["String", "Two Pointers"],
      difficulty: "Easy",
    },
    {
      category: "Two Pointers",
      subcategory: "Collision Pointers",
      number: "360",
      title: "Sort Transformed Array",
      topics: ["Array", "Two Pointers", "Math", "Sorting"],
      difficulty: "Medium",
    },
    {
      category: "Two Pointers",
      subcategory: "Collision Pointers",
      number: "443",
      title: "String Compression",
      topics: ["String", "Two Pointers"],
      difficulty: "Medium",
    },
    {
      category: "Two Pointers",
      subcategory: "Collision Pointers",
      number: "611",
      title: "Valid Triangle Number",
      topics: ["Array", "Two Pointers", "Greedy", "Sorting", "Binary Search"],
      difficulty: "Medium",
    },
    {
      category: "Two Pointers",
      subcategory: "Collision Pointers",
      number: "658",
      title: "Find K Closest Elements",
      topics: [
        "Array",
        "Heap (Priority Queue)",
        "Two Pointers",
        "Sorting",
        "Binary Search",
        "Sliding Window",
      ],
      difficulty: "Medium",
    },
    {
      category: "Two Pointers",
      subcategory: "Collision Pointers",
      number: "881",
      title: "Boats to Save People",
      topics: ["Array", "Two Pointers", "Greedy", "Sorting"],
      difficulty: "Medium",
    },
    {
      category: "Two Pointers",
      subcategory: "Collision Pointers",
      number: "977",
      title: "Squares of a Sorted Array",
      topics: ["Array", "Two Pointers", "Sorting"],
      difficulty: "Easy",
    },
    {
      category: "Two Pointers",
      subcategory: "Collision Pointers",
      number: "1099",
      title: "Two Sum Less Than K",
      topics: ["Array", "Two Pointers", "Sorting", "Binary Search"],
      difficulty: "Easy",
    },

    // Image 4 - TWO POINTERS FAST AND SLOW POINTER
    {
      category: "Two Pointers",
      subcategory: "Fast and Slow Pointer",
      number: "26",
      title: "Remove Duplicates from Sorted Array",
      topics: ["Array", "Two Pointers"],
      difficulty: "Easy",
    },
    {
      category: "Two Pointers",
      subcategory: "Fast and Slow Pointer",
      number: "27",
      title: "Remove Element",
      topics: ["Array", "Two Pointers"],
      difficulty: "Easy",
    },
    {
      category: "Two Pointers",
      subcategory: "Fast and Slow Pointer",
      number: "80",
      title: "Remove Duplicates from Sorted Array II",
      topics: ["Array", "Two Pointers"],
      difficulty: "Medium",
    },
    {
      category: "Two Pointers",
      subcategory: "Fast and Slow Pointer",
      number: "88",
      title: "Merge Sorted Array",
      topics: ["Array", "Two Pointers", "Sorting"],
      difficulty: "Easy",
    },
    {
      category: "Two Pointers",
      subcategory: "Fast and Slow Pointer",
      number: "283",
      title: "Move Zeroes",
      topics: ["Array", "Two Pointers"],
      difficulty: "Easy",
    },
    {
      category: "Two Pointers",
      subcategory: "Fast and Slow Pointer",
      number: "334",
      title: "Increasing Triplet Subsequence",
      topics: ["Array", "Greedy"],
      difficulty: "Medium",
    },
    {
      category: "Two Pointers",
      subcategory: "Fast and Slow Pointer",
      number: "719",
      title: "Find K-th Smallest Pair Distance",
      topics: ["Array", "Two Pointers", "Sorting", "Binary Search"],
      difficulty: "Hard",
    },
    {
      category: "Two Pointers",
      subcategory: "Fast and Slow Pointer",
      number: "845",
      title: "Longest Mountain in Array",
      topics: ["Array", "Two Pointers", "Dynamic Programming", "Enumeration"],
      difficulty: "Medium",
    },
    {
      category: "Two Pointers",
      subcategory: "Fast and Slow Pointer",
      number: "978",
      title: "Longest Turbulent Subarray",
      topics: ["Array", "Sliding Window", "Dynamic Programming"],
      difficulty: "Medium",
    },
    {
      category: "Two Pointers",
      subcategory: "Fast and Slow Pointer",
      number: "LCR 139",
      title: "Training Program I",
      topics: ["Array", "Two Pointers", "Sorting"],
      difficulty: "Easy",
    },

    // Image 4 - TWO POINTERS SEPARATE TWO POINTERS
    {
      category: "Two Pointers",
      subcategory: "Separate Two Pointers",
      number: "350",
      title: "Intersection of Two Arrays II",
      topics: [
        "Array",
        "Hash Table",
        "Two Pointers",
        "Sorting",
        "Binary Search",
      ],
      difficulty: "Easy",
    },
    {
      category: "Two Pointers",
      subcategory: "Separate Two Pointers",
      number: "392",
      title: "Is Subsequence",
      topics: ["String", "Two Pointers", "Dynamic Programming"],
      difficulty: "Easy",
    },
    {
      category: "Two Pointers",
      subcategory: "Separate Two Pointers",
      number: "415",
      title: "Add Strings",
      topics: ["String", "Simulation", "Math"],
      difficulty: "Easy",
    },
    {
      category: "Two Pointers",
      subcategory: "Separate Two Pointers",
      number: "844",
      title: "Backspace String Compare",
      topics: ["String", "Stack", "Two Pointers", "Simulation"],
      difficulty: "Easy",
    },
    {
      category: "Two Pointers",
      subcategory: "Separate Two Pointers",
      number: "925",
      title: "Long Pressed Name",
      topics: ["String", "Two Pointers"],
      difficulty: "Easy",
    },
    {
      category: "Two Pointers",
      subcategory: "Separate Two Pointers",
      number: "1229",
      title: "Meeting Scheduler",
      topics: ["Array", "Two Pointers", "Sorting"],
      difficulty: "Medium",
    },

    // Image 5 - BINARY SEARCH BINARY SUBSCRIPT
    {
      category: "Binary Search",
      subcategory: "Binary Subscript",
      number: "4",
      title: "Median of Two Sorted Arrays",
      topics: ["Array", "Divide and Conquer", "Binary Search"],
      difficulty: "Hard",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Subscript",
      number: "33",
      title: "Search in Rotated Sorted Array",
      topics: ["Array", "Binary Search"],
      difficulty: "Medium",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Subscript",
      number: "34",
      title: "Find First and Last Position of Element in Sorted Array",
      topics: ["Array", "Binary Search"],
      difficulty: "Medium",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Subscript",
      number: "35",
      title: "Search Insert Position",
      topics: ["Array", "Binary Search"],
      difficulty: "Easy",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Subscript",
      number: "74",
      title: "Search a 2D Matrix",
      topics: ["Array", "Matrix", "Binary Search"],
      difficulty: "Medium",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Subscript",
      number: "81",
      title: "Search in Rotated Sorted Array II",
      topics: ["Array", "Binary Search"],
      difficulty: "Medium",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Subscript",
      number: "153",
      title: "Find Minimum in Rotated Sorted Array",
      topics: ["Array", "Binary Search"],
      difficulty: "Medium",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Subscript",
      number: "154",
      title: "Find Minimum in Rotated Sorted Array II",
      topics: ["Array", "Binary Search"],
      difficulty: "Hard",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Subscript",
      number: "162",
      title: "Find Peak Element",
      topics: ["Array", "Binary Search"],
      difficulty: "Medium",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Subscript",
      number: "167",
      title: "Two Sum II - Input Array Is Sorted",
      topics: ["Array", "Two Pointers", "Binary Search"],
      difficulty: "Medium",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Subscript",
      number: "240",
      title: "Search a 2D Matrix II",
      topics: ["Array", "Matrix", "Divide and Conquer", "Binary Search"],
      difficulty: "Medium",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Subscript",
      number: "278",
      title: "First Bad Version",
      topics: ["Binary Search", "Interactive"],
      difficulty: "Easy",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Subscript",
      number: "374",
      title: "Guess Number Higher or Lower",
      topics: ["Binary Search", "Interactive"],
      difficulty: "Easy",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Subscript",
      number: "704",
      title: "Binary Search",
      topics: ["Array", "Binary Search"],
      difficulty: "Easy",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Subscript",
      number: "744",
      title: "Find Smallest Letter Greater Than Target",
      topics: ["Array", "Binary Search"],
      difficulty: "Easy",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Subscript",
      number: "852",
      title: "Peak Index in a Mountain Array",
      topics: ["Array", "Binary Search"],
      difficulty: "Medium",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Subscript",
      number: "1095",
      title: "Find in Mountain Array",
      topics: ["Array", "Binary Search", "Interactive"],
      difficulty: "Hard",
    },

    // Image 5 - BINARY SEARCH BINARY ANSWER
    {
      category: "Binary Search",
      subcategory: "Binary Answer",
      number: "50",
      title: "Pow(x, n)",
      topics: ["Math", "Recursion"],
      difficulty: "Medium",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Answer",
      number: "69",
      title: "Sqrt(x)",
      topics: ["Math", "Binary Search"],
      difficulty: "Easy",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Answer",
      number: "287",
      title: "Find the Duplicate Number",
      topics: ["Array", "Two Pointers", "Binary Search", "Bit Manipulation"],
      difficulty: "Medium",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Answer",
      number: "367",
      title: "Valid Perfect Square",
      topics: ["Math", "Binary Search"],
      difficulty: "Easy",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Answer",
      number: "400",
      title: "Nth Digit",
      topics: ["Math", "Binary Search"],
      difficulty: "Medium",
    },
    {
      category: "Binary Search",
      subcategory: "Binary Answer",
      number: "1300",
      title: "Sum of Mutated Array Closest to Target",
      topics: ["Array", "Sorting", "Binary Search"],
      difficulty: "Medium",
    },

    // Image 5 - BINARY SEARCH COMPLEX BINARY SEARCH
    {
      category: "Binary Search",
      subcategory: "Complex Binary Search",
      number: "209",
      title: "Minimum Size Subarray Sum",
      topics: ["Array", "Prefix Sum", "Binary Search", "Sliding Window"],
      difficulty: "Medium",
    },
    {
      category: "Binary Search",
      subcategory: "Complex Binary Search",
      number: "259",
      title: "3Sum Smaller",
      topics: ["Array", "Two Pointers", "Sorting", "Binary Search"],
      difficulty: "Medium",
    },
    {
      category: "Binary Search",
      subcategory: "Complex Binary Search",
      number: "270",
      title: "Closest Binary Search Tree Value",
      topics: [
        "Tree",
        "Binary Tree",
        "Binary Search Tree",
        "Binary Search",
        "Depth-First Search",
      ],
      difficulty: "Easy",
    },
    {
      category: "Binary Search",
      subcategory: "Complex Binary Search",
      number: "287",
      title: "Find the Duplicate Number",
      topics: ["Array", "Two Pointers", "Binary Search", "Bit Manipulation"],
      difficulty: "Medium",
    },
    {
      category: "Binary Search",
      subcategory: "Complex Binary Search",
      number: "349",
      title: "Intersection of Two Arrays",
      topics: ["Array", "Hash Table", "Two Pointers", "Binary Search"],
      difficulty: "Easy",
    },
    {
      category: "Binary Search",
      subcategory: "Complex Binary Search",
      number: "350",
      title: "Intersection of Two Arrays II",
      topics: [
        "Array",
        "Hash Table",
        "Two Pointers",
        "Sorting",
        "Binary Search",
      ],
      difficulty: "Easy",
    },
    {
      category: "Binary Search",
      subcategory: "Complex Binary Search",
      number: "410",
      title: "Split Array Largest Sum",
      topics: [
        "Array",
        "Prefix Sum",
        "Greedy",
        "Binary Search",
        "Dynamic Programming",
      ],
      difficulty: "Hard",
    },
    {
      category: "Binary Search",
      subcategory: "Complex Binary Search",
      number: "658",
      title: "Find K Closest Elements",
      topics: [
        "Array",
        "Heap (Priority Queue)",
        "Two Pointers",
        "Sorting",
        "Binary Search",
        "Sliding Window",
      ],
      difficulty: "Medium",
    },
    {
      category: "Binary Search",
      subcategory: "Complex Binary Search",
      number: "702",
      title: "Search in a Sorted Array of Unknown Size",
      topics: ["Array", "Binary Search", "Interactive"],
      difficulty: "Medium",
    },
    {
      category: "Binary Search",
      subcategory: "Complex Binary Search",
      number: "719",
      title: "Find K-th Smallest Pair Distance",
      topics: ["Array", "Two Pointers", "Sorting", "Binary Search"],
      difficulty: "Hard",
    },
    {
      category: "Binary Search",
      subcategory: "Complex Binary Search",
      number: "875",
      title: "Koko Eating Bananas",
      topics: ["Array", "Binary Search"],
      difficulty: "Medium",
    },
    {
      category: "Binary Search",
      subcategory: "Complex Binary Search",
      number: "1011",
      title: "Capacity To Ship Packages Within D Days",
      topics: ["Array", "Binary Search"],
      difficulty: "Medium",
    },
    {
      category: "Binary Search",
      subcategory: "Complex Binary Search",
      number: "1482",
      title: "Minimum Number of Days to Make m Bouquets",
      topics: ["Array", "Binary Search"],
      difficulty: "Medium",
    },
  ];

  // Unique category filter options
  const categories = [
    "all",
    ...new Set(algorithmData.map((item) => item.category)),
  ];
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
                  {item.title}
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
