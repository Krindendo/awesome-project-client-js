import moment from "moment";

export const getTasksByProject = (tasks, selectedProject) => {
  if (tasks === undefined) return;
  if (selectedProject.id === "") {
    let today = moment().format("YYYY/MM/DD");
    let tomorrow = moment().add(1, "days").format("YYYY/MM/DD");
    if (selectedProject.name === "Today")
      return tasks.filter((task) => moment(task.date).isSameOrBefore(today));
    if (selectedProject.name === "Tomorrow")
      return tasks.filter((task) => task.date === tomorrow);
    return tasks.filter((task) => moment(task.date).isAfter(tomorrow));
  } else {
    return tasks.filter((task) => task.projectId === selectedProject.id);
  }
};
