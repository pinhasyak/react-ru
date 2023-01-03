import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import courses from "../data/courses";
// import NotF ound from "./NotFound";

const Course = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.id.toString() === params.id);

  useEffect(() => {
    if (!course) {
      navigate("..", { relative: "path" });
    }
  }, [course, navigate]);
  // Simply show not foud component
  //   if (!course) {
  //     return <NotFound />;
  //   }
  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      <Link to=".." relative="path">
        All Courses
      </Link>
    </>
  );
};

export default Course;
