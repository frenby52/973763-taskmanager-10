import {createBoardTemplate} from "./components/board";
import {createFilterTemplate} from "./components/filter";
import {createLoadMoreButtonTemplate} from "./components/load-more-button";
import {createSiteMenuTemplate} from "./components/site-menu";
import {createTaskEditTemplate} from "./components/task-edit";
import {createTaskTemplate} from "./components/task";

const TASK_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate());
render(siteMainElement, createBoardTemplate());

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
render(taskListElement, createTaskEditTemplate());

new Array(TASK_COUNT).fill(``).forEach(() => render(taskListElement, createTaskTemplate()));

const boardElement = siteMainElement.querySelector(`.board`);
render(boardElement, createLoadMoreButtonTemplate());
