// import React, { useState, useEffect } from "react";
// import { useFilter } from "../context/FilterContext";
// import { ExploreContentProps } from "../types";
// import PageHeader from "./pageHeader";
// import { useNavigate } from "react-router-dom";

// interface SearchProps {
//   allContent: ExploreContentProps[];
//   onContentFiltered: (filteredContent: ExploreContentProps[]) => void;
// }

// const Search: React.FC<SearchProps> = ({ allContent, onContentFiltered }) => {
//   const { filter, setFilter } = useFilter();
//   const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
//   const [inputValue, setInputValue] = useState<string>("");
//   const [localFilter, setLocalFilter] = useState<string>(filter);
//   const [recommendations, setRecommendations] = React.useState<string[]>([]);
//   const dropdownRef = React.useRef<HTMLDivElement>(null);

//   const navigate = useNavigate();

//   React.useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setRecommendations([]);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     setLocalFilter(filter);
//   }, [filter]);

//   const toggleDropdown = () => {
//     setDropdownVisible((prev) => !prev);
//   };

//   const handleOptionSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newFilter = event.target.value;
//     setLocalFilter(newFilter);
//     setFilter(newFilter);
//     setDropdownVisible(false);
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = event.target.value;
//     setInputValue(newValue);

//     if (newValue.trim()) {
//       const lowerCaseValue = newValue.toLowerCase();
//       const topicRecommendations = allContent
//         .map((item) => item.topic)
//         .filter((topic) => topic.toLowerCase().includes(lowerCaseValue))
//         .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates

//       const guestRecommendations = allContent
//         .map((item) => item.guest)
//         .filter((guest) => guest.toLowerCase().includes(lowerCaseValue))
//         .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates

//       setRecommendations([
//         ...new Set([...topicRecommendations, ...guestRecommendations]),
//       ]);
//     } else {
//       setRecommendations([]);
//     }
//   };

//   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const handleRecommendationClick = (recommendation: string) => {
//     setInputValue(recommendation);
//     setRecommendations([]);
//     handleSearch();
//   };

//   const handleSearch = () => {
//     const newFilteredContent = allContent.filter((item) => {
//       const matchesType = localFilter === "all" || item.type === localFilter;
//       const matchesSearchTerm =
//         item.topic.toLowerCase().includes(inputValue.toLowerCase()) ||
//         item.guest.toLowerCase().includes(inputValue.toLowerCase());
//       return matchesType && matchesSearchTerm;
//     });

//     onContentFiltered(newFilteredContent);
//   };

//   const handlePlanetEarthClick = () => {
//     navigate("/planetEarth");
//   };
//   const handleCoCreatorsClick = () => {
//     navigate("/coCreators");
//   };

//   return (
//     <div className="searchComponent">
//       <PageHeader
//         title="explore"
//         description="embrace your journey of unlearning in any order you feel comfortable with."
//       />
//       <div className="input-container">
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           onKeyDown={handleKeyDown}
//           placeholder="Type to search..."
//         />
//         {recommendations.length > 0 && (
//           <div className="recommendations-dropdown" ref={dropdownRef}>
//             {recommendations.map((rec, index) => (
//               <div
//                 key={index}
//                 className="recommendation-item"
//                 onClick={() => handleRecommendationClick(rec)}
//               >
//                 {rec}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <div className="search-options">
//         <h4
//           className={localFilter === "all" ? "active" : ""}
//           onClick={() =>
//             handleOptionSelect({
//               target: { value: "all" } as HTMLInputElement,
//             } as React.ChangeEvent<HTMLInputElement>)
//           }
//         >
//           all
//         </h4>
//         <h4
//           className={localFilter === "article" ? "active" : ""}
//           onClick={() =>
//             handleOptionSelect({
//               target: { value: "article" } as HTMLInputElement,
//             } as React.ChangeEvent<HTMLInputElement>)
//           }
//         >
//           article
//         </h4>
//         <h4
//           className={localFilter === "document" ? "active" : ""}
//           onClick={() =>
//             handleOptionSelect({
//               target: { value: "document" } as HTMLInputElement,
//             } as React.ChangeEvent<HTMLInputElement>)
//           }
//         >
//           document
//         </h4>
//         <h4
//           className={localFilter === "event" ? "active" : ""}
//           onClick={() =>
//             handleOptionSelect({
//               target: { value: "event" } as HTMLInputElement,
//             } as React.ChangeEvent<HTMLInputElement>)
//           }
//         >
//           event
//         </h4>
//         <h4
//           className={localFilter === "podcast" ? "active" : ""}
//           onClick={() =>
//             handleOptionSelect({
//               target: { value: "podcast" } as HTMLInputElement,
//             } as React.ChangeEvent<HTMLInputElement>)
//           }
//         >
//           podcast
//         </h4>
//         <h4
//           className={`border-right ${localFilter === "video" ? "active" : ""}`}
//           onClick={() =>
//             handleOptionSelect({
//               target: { value: "video" } as HTMLInputElement,
//             } as React.ChangeEvent<HTMLInputElement>)
//           }
//         >
//           video
//         </h4>
//         <div className="dropdown-container">
//           <button className="btn-world orangeHover" onClick={toggleDropdown}>
//             <span>our worlds</span>
//             <div
//               className={`arrow ${dropdownVisible ? "arrow-up" : "arrow-down"}`}
//             ></div>
//           </button>
//           <div
//             id="dropdown"
//             className={`dropdown ${dropdownVisible ? "visible" : "hidden"}`}
//           >
//             <label
//               onClick={handlePlanetEarthClick}
//               className="select-item orangeHover border-bottom border-light-subtle rounded-top-2"
//             >
//               planet-earth
//             </label>
//             <label
//               onClick={handleCoCreatorsClick}
//               className="select-item orangeHover border-bottom border-light-subtle"
//             >
//               co-creators
//             </label>
//           </div>
//         </div>
//       </div>
//       <button className="btn" onClick={handleSearch}>
//         search
//       </button>
//     </div>
//   );
// };

// export default Search;

import React, { useState, useEffect } from "react";
import { useFilter } from "../context/FilterContext";
import { ExploreContentProps } from "../types";
import PageHeader from "./pageHeader";
import { useNavigate } from "react-router-dom";

interface SearchProps {
  allContent: ExploreContentProps[];
  onContentFiltered: (filteredContent: ExploreContentProps[]) => void;
}

const Search: React.FC<SearchProps> = ({ allContent, onContentFiltered }) => {
  const { filter, setFilter } = useFilter();
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [localFilter, setLocalFilter] = useState<string>(filter);
  const [inputValueSuggestion, setInputValueSuggestion] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const navigate = useNavigate();
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const suggestions = Array.from(
    new Set([
      ...allContent.map((item) => item.guest),
      ...allContent.map((item) => item.topic),
    ])
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSuggestion("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setLocalFilter(filter);
  }, [filter]);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleOptionSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = event.target.value;
    setLocalFilter(newFilter);
    setFilter(newFilter);
    setDropdownVisible(false);
  };

  const handleInputChangeSuggestion = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setInputValueSuggestion(value);

    const matchedSuggestion = getSuggestion(value);
    if (matchedSuggestion) {
      setSuggestion(boldMatchingLetters(matchedSuggestion, value));
    } else {
      setSuggestion("");
    }
  };

  const handleKeyDownSuggestion = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleSearch(inputValueSuggestion);
    }
  };

  const handleSearch = (searchTerm: string) => {
    const newFilteredContent = allContent.filter((item) => {
      const matchesType = localFilter === "all" || item.type === localFilter;
      const matchesSearchTerm =
        item.topic.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
        item.guest.toLowerCase().startsWith(searchTerm.toLowerCase());
      return matchesType && matchesSearchTerm;
    });

    onContentFiltered(newFilteredContent);
  };

  const handlePlanetEarthClick = () => {
    navigate("/planetEarth");
  };

  const handleCoCreatorsClick = () => {
    navigate("/coCreators");
  };

  const getSuggestion = (query: string): string | undefined => {
    if (!query) return "";
    return suggestions.find((item) =>
      item.toLowerCase().startsWith(query.toLowerCase())
    );
  };

  const boldMatchingLetters = (suggestion: string, query: string): string => {
    const regex = new RegExp(`^(${query})`, "i");
    return suggestion.replace(regex, '<span class="match">$1</span>');
  };

  return (
    <div className="searchComponent">
      <PageHeader
        title="explore"
        description="embrace your journey of unlearning in any order you feel comfortable with."
      />
      <div className="autocomplete">
        <input
          type="text"
          id="autocomplete-input"
          placeholder="Search something..."
          value={inputValueSuggestion}
          onChange={handleInputChangeSuggestion}
          onKeyDown={handleKeyDownSuggestion}
        />
        <div
          id="autocomplete-suggestion"
          className="suggestion"
          dangerouslySetInnerHTML={{ __html: suggestion }}
        />
      </div>

      <div className="search-options">
        <h4
          className={localFilter === "all" ? "active" : ""}
          onClick={() =>
            handleOptionSelect({
              target: { value: "all" } as HTMLInputElement,
            } as React.ChangeEvent<HTMLInputElement>)
          }
        >
          all
        </h4>
        <h4
          className={localFilter === "article" ? "active" : ""}
          onClick={() =>
            handleOptionSelect({
              target: { value: "article" } as HTMLInputElement,
            } as React.ChangeEvent<HTMLInputElement>)
          }
        >
          article
        </h4>
        <h4
          className={localFilter === "document" ? "active" : ""}
          onClick={() =>
            handleOptionSelect({
              target: { value: "document" } as HTMLInputElement,
            } as React.ChangeEvent<HTMLInputElement>)
          }
        >
          document
        </h4>
        <h4
          className={localFilter === "event" ? "active" : ""}
          onClick={() =>
            handleOptionSelect({
              target: { value: "event" } as HTMLInputElement,
            } as React.ChangeEvent<HTMLInputElement>)
          }
        >
          event
        </h4>
        <h4
          className={localFilter === "podcast" ? "active" : ""}
          onClick={() =>
            handleOptionSelect({
              target: { value: "podcast" } as HTMLInputElement,
            } as React.ChangeEvent<HTMLInputElement>)
          }
        >
          podcast
        </h4>
        <h4
          className={`border-right ${localFilter === "video" ? "active" : ""}`}
          onClick={() =>
            handleOptionSelect({
              target: { value: "video" } as HTMLInputElement,
            } as React.ChangeEvent<HTMLInputElement>)
          }
        >
          video
        </h4>
        <div className="dropdown-container">
          <button className="btn-world orangeHover" onClick={toggleDropdown}>
            <span>our worlds</span>
            <div
              className={`arrow ${dropdownVisible ? "arrow-up" : "arrow-down"}`}
            ></div>
          </button>
          <div
            id="dropdown"
            className={`dropdown ${dropdownVisible ? "visible" : "hidden"}`}
          >
            <label
              onClick={handlePlanetEarthClick}
              className="select-item orangeHover border-bottom border-light-subtle rounded-top-2"
            >
              planet-earth
            </label>
            <label
              onClick={handleCoCreatorsClick}
              className="select-item orangeHover border-bottom border-light-subtle"
            >
              co-creators
            </label>
          </div>
        </div>
      </div>
      <button
        className="btn"
        onClick={() => handleSearch(inputValueSuggestion)}
      >
        search
      </button>
    </div>
  );
};

export default Search;
