import React, { useState } from 'react';
import cls from './WorkTimeTable.module.scss';
import { Gantt, Task, ViewMode } from 'gantt-task-react';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import 'gantt-task-react/dist/index.css';

export const WorkTimeTable = () => {
    const currentDate = new Date();
    const initialTasks: Task[] = [
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 8),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 22),
            name: "Проект Строителей",
            id: "builderProject",
            progress: 25,
            type: "project",
            hideChildren: false,
            displayOrder: 1,
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 8),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 22),
            name: "Иван Иванов",
            id: "builder_1",
            progress: 45,
            type: "task",
            project: "builderProject",
            displayOrder: 2,
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 8),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 22),
            name: "Петр Петров",
            id: "builder_2",
            progress: 25,
            type: "task",
            project: "builderProject",
            displayOrder: 3,
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 8),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 18),
            name: "Проект Уборщиц",
            id: "cleanerProject",
            progress: 25,
            type: "project",
            hideChildren: false,
            displayOrder: 4,
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 8),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 18),
            name: "Анна Сидорова",
            id: "cleaner_1",
            progress: 80,
            type: "task",
            project: "cleanerProject",
            displayOrder: 5,
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 8),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 18),
            name: "Мария Кузнецова",
            id: "cleaner_2",
            progress: 70,
            type: "task",
            project: "cleanerProject",
            displayOrder: 6,
        },
    ];

    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    const handleExpanderClick = (task: Task) => {
        setTasks(prevTasks => {
            const newTasks = prevTasks.map(t => {
                if (t.id === task.id) {
                    return { ...t, hideChildren: !t.hideChildren };
                }
                return t;
            });
            return newTasks;
        });
    };

    return (
        <div className={cls.wrapper}>
            <Text.Paragraph
                size={SizeEnum.H2}
                color={ColorEnum.TEXT}
                weight={WeightEnum.BOLD}
            >
                Рабочие смены
            </Text.Paragraph>
            <Gantt
                viewMode={ViewMode.Hour}
                locale="ru"
                tasks={tasks}
                onExpanderClick={handleExpanderClick}
            />
        </div>
    );
};
