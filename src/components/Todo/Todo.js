import React, { useState, useEffect } from "react";
import styles from "../App/App.module.css";
import "../App/Fonts/Fonts.css";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import Footer from "../Footer/Footer";

const Todo = () => {
    const initialState = {
        tasks: [
            {
                value: "Помыть посуду",
                isDone: true,
                id: 1
            },
            {
                value: "Погладить белье",
                isDone: false,
                id: 2
            },
            {
                value: "Выгулять собаку",
                isDone: true,
                id: 3
            }
        ],

        count: 3,

        valueFooter: [
            {
                isActive: true,
                text: "All",
            },
            {
                isActive: false,
                text: "Active",
            },
            {
                isActive: false,
                text: "Completed",
            },
        ],

        countFooter: 1
    };

    const [tasks, setTasks] = useState(initialState.tasks);
    const [countFooter, setCountFooter] = useState(initialState.countFooter);
    const [count, setCount] = useState(initialState.count);
    const [valueFooter, setValueFooter] = useState(initialState.valueFooter);

    useEffect(() => {
        console.log('componentDidMount');
    }, []);

    useEffect(() => {
        console.log('componentDidUpdate');
    });

    const onClickDone = id => {
        const newItemList = tasks.map(item => {
            if (item.id === id) {
                item.isDone = !item.isDone;
            }
            return item;
        })
        setTasks(newItemList);
        setCountFooter(newItemList.filter(item => !item.isDone).length);
    };

    const onClickDelete = id => {
        const newTasks = tasks.filter(item => item.id !== id);

        setTasks(newTasks);
        setCountFooter(newTasks.filter(item => !item.isDone).length);
    };

    const onClickAdd = value => {
        const newTasks = [
            ...tasks,

            {
                value,
                isDone: false,
                id: count + 1
            }
        ];

        setTasks(newTasks);
        setCount(count + 1);
        setCountFooter((countFooter) => countFooter + 1);
    };

    const onClickFilter = key => {
        const tasksList = [...document.querySelectorAll('li')];
        tasksList.forEach(item => item.style.display = '');
        changeStateFooterBtn(key);

        switch (key) {
            case 'Active':
                tasksList.filter(item => item.classList.length === 2).forEach(item => item.style.display = 'none');
                break;
            case 'Completed':
                tasksList.filter(item => item.classList.length === 1).forEach(item => item.style.display = 'none');
                break;
            default:
                break;
        }
    };

    const changeStateFooterBtn = (key) => {
        const newValueFooter = valueFooter.map(item => {
            if (item.text === key) {
                item.isActive = true;
            } else {
                item.isActive = false;
            }
            return item;
        });

        setValueFooter(newValueFooter);
    };

    const onClickClear = () => {
        const newTasks = tasks.filter(item => !item.isDone);
        setTasks(newTasks);
    };

    return (
        <div className={styles.item}>
            <TodoInput onClickAdd={onClickAdd} />
            <TodoList tasks={tasks} onClickDone={onClickDone} onClickDelete={onClickDelete} />
            <Footer count={countFooter} btn={valueFooter} onClick={onClickFilter} onClickClear={onClickClear}/>
        </div>
    )
}

export default Todo;