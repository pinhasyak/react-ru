import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import courses from "../data/courses";

const SORT_KEYS = ["title", "slug", "id"];

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (SORT_KEYS.includes(key)) {
    sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  }
  return sortedCourses;
}

const Courses = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate(".");
      setSortKey(undefined);
      setSortedCourses(sortCourses(courses, sortKey));
    }
  }, [sortKey, navigate]);
  return (
    <>
      <h1>{sortKey ? `Sortded By ${sortKey}` : "Courses"}</h1>
      {sortedCourses.map((course) => (
        <div key={course.id}>
          <Link to={course.id.toString()} className="courseLink">
            {course.title}
          </Link>
          <br />
        </div>
      ))}
    </>
  );
};

export default Courses;
