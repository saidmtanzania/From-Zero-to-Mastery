/* eslint-disable @typescript-eslint/no-explicit-any */
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import styles from "./CourseGoalList.module.css";

function CourseGoalList(props: any) {
  return (
    <ul className={styles["goal-list"]}>
      {props.items.map((goal: any) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
}

export default CourseGoalList;
