/* eslint-disable @typescript-eslint/no-explicit-any */
import "./CourseGoalItem.css";

function CourseGoalItem(props: any) {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
}

export default CourseGoalItem;
