<script>
  import Task from './Task.svelte';
  import { TasksCollection } from '../api/TasksCollection';
  import TaskForm from './TaskForm.svelte';
  
  let hideCompleted = false;
  const hideCompletedFilter = { isChecked: { $ne: true } };

  // Retrieve tasks dynamically, and if selected, hide completed tasks
  $m:tasks = TasksCollection.find(
      hideCompleted ? hideCompletedFilter : {}, { sort: { createdAt: -1 } }
    ).fetch()

  // Add the option to show or hide completed tasks
  const setHideCompleted = value =>  {
      hideCompleted = value;
  }
</script>

<div class="app">
  <header>
      <div class="app-bar">
          <div class="app-header">
              <h1>📝️ To Do List</h1>
          </div>
      </div>
  </header>

  <div class="main">
      <TaskForm />

      <div class="filter">
        <button on:click={() => setHideCompleted(!hideCompleted)}>
            {hideCompleted ? 'Show All' : 'Hide Completed'}
        </button>
      </div>

      <ul class="tasks">
          {#each tasks as task (task._id)}
              <Task task={task} />
          {/each}
      </ul>
  </div>
</div>
