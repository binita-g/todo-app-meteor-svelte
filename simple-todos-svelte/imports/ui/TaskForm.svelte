<script>
    import { TasksCollection } from '../api/TasksCollection';

    let newTask = '';

    // When task is submitted, add to collection
    const handleSubmit = () => {
        // Insert with text and date
        TasksCollection.insert({
            text: newTask,
            createdAt: new Date(), // current time
        });

        // Clear form
        newTask = '';
    }
</script>

<!-- Form to add new tasks -->
<form class="task-form" on:submit|preventDefault={handleSubmit}>
    <input
            type="text"
            name="text"
            placeholder="Type to add new tasks"
            bind:value={newTask}
    />
    
    <!-- Submit button -->
    <button type="submit">Add Task</button>
</form>