/*import React from 'react'
import TaskCard from './TaskCard'

import './TaskColumn.css'

function TaskColumn({title, image, tasks, status}) {
  return (
    <>
    <section className="task_column">
        <h2 className="task_column_heading">
            <img className='task_column_icon' src={image} alt='todo'/>{title}</h2>
            {tasks.map((task, index) => task.status === status && 
            <TaskCard key={index}
              title={task.task} tags={task.tags} />
            )}
             <TaskCard  />
    </section>
   
    </>
  )
}

export default TaskColumn */



import React from "react";
import Todo from "../assets/direct-hit.png";

import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
    return (
        <section className='task_column'>
            <h2 className='task_column_heading'>
                <img className='task_column_icon' src={icon} alt='' /> {title}
            </h2>

            {tasks.map(
                (task, index) =>
                    task.status === status && (
                        <TaskCard
                            key={index}
                            title={task.task}
                            tags={task.tags}
                            index={index}
                            handleDelete={handleDelete}
                           
                        />
                    )
            )}
        </section>
    );
};

export default TaskColumn;