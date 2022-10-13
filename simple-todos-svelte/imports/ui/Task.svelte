<script>
    import { TasksCollection } from '../api/TasksCollection';
  
    export let task;
  
    const toggleChecked = () => {
      // Set the isChecked property to the opposite of its current value
      TasksCollection.update(task._id, {
        $set: { isChecked: !task.isChecked }
      });
    };

    // Remove task if "X" button is clicked
    const deleteThisTask = () => {
        TasksCollection.remove(task._id);
    };
  </script>

<li>
    <!-- Task checkbox to mark item as completed -->
    <input
            type="checkbox"
            readonly
            checked={!!task.isChecked}
            on:click={toggleChecked}
    />

    <!-- Text of task -->
    <span>{ task.text }</span>

    <!-- Remove button to delete task -->
    <button class="delete" on:click={deleteThisTask}>&times;</button>
</li>
